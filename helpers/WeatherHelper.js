export const _getWeahterForecast = (weatherForecast = []) => {
    let finalArray = [];
    let count = 0;
    for (let i = 0; i < weatherForecast.length; i++) {
        if (count === 4) break;

        if (finalArray.length === 0) {
            finalArray.push(weatherForecast[i]);
            count++;
        } else if (
            finalArray.length !== 0 &&
            finalArray[count - 1].dt_txt.split(" ")[0] !==
                weatherForecast[i].dt_txt.split(" ")[0]
        ) {
            finalArray.push(weatherForecast[i]);
            count++;
        }
    }
    console.log(finalArray);
    return finalArray;
};
