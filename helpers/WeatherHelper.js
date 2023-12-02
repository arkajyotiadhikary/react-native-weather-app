// todo get current weather
// todo get weather data for next for days with high and low temp values

export const _getWeahterForecast = (weatherForecast = []) => {
      let finalArray = [];
      const date = new Date();
      console.log("weather forcast", weatherForecast);
      let count = 0;
      for (let i = 0; i < weatherForecast.length; i++) {
            const finalArrayLength = finalArray.length;

            if (
                  date.getDate().toString() ===
                  weatherForecast[i].dt_txt.split(" ")[0].split("-")[2][1]
            )
                  continue;

            // STORE DATA IN A ARRAY WITH HIGH AND LOW TEMP
            if (finalArrayLength === 0) {
                  count++;
                  finalArray.push(weatherForecast[i]);
                  finalArray[count - 1]["weather_range"] = [weatherForecast[i].main.temp, 0];
            } else if (
                  finalArrayLength !== 0 &&
                  finalArray[count - 1].dt_txt.split(" ")[0] ===
                        weatherForecast[i].dt_txt.split(" ")[0]
            ) {
                  if (weatherForecast[i].main.temp > finalArray[count - 1]["weather_range"][1]) {
                        finalArray[count - 1]["weather_range"][1] = weatherForecast[i].main.temp;
                  } else if (
                        weatherForecast[i].main.temp < finalArray[count - 1]["weather_range"][0]
                  )
                        finalArray[count - 1]["weather_range"][0] = weatherForecast[i].main.temp;
            } else if (
                  finalArrayLength !== 0 &&
                  finalArray[count - 1].dt_txt.split(" ")[0] !==
                        weatherForecast[i].dt_txt.split(" ")[0]
            ) {
                  count++;
                  finalArray.push(weatherForecast[i]);
                  finalArray[count - 1]["weather_range"] = [weatherForecast[i].main.temp, 0];
            }
            // BREAK IF THE ARRAY HAS 4 ELEMENT
            if (count === 5 && finalArray[count - 1]["weather_range"][1] !== 0) break;
      }
      console.log("final", finalArray);
      return finalArray;
};
