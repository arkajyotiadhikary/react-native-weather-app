/*
    @TODO 
    * Have to make the first letter of the weather description capitalize
    * have to convert the dates to actual date name
*/

import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import {
      _fetchCurrentWeather,
      _fetchWeatherForcast,
      _getCurrentLocation,
      _getSearchLocation,
} from "../services/WeatherServices";

// features
import { setChangeData, setCurrentLocation } from "../features/locationSlice";
// helpers
import { _getWeahterForecast } from "../helpers/WeatherHelper";
import { CapitalizeFirstLetter, FormateDate } from "../helpers/StringHelper";

import styles from "../styles/Weather";

const Weather = () => {
      const dispatch = useDispatch();

      const [loaded, setLoaded] = useState(false);
      const [city, setCity] = useState(null);
      const [country, setCountry] = useState("");
      const [tempreture, setTempreture] = useState(0);
      const [description, setDescription] = useState("");
      const [windSpeed, setWindSpeed] = useState(0);
      const [humidity, setHumidity] = useState(0);
      const [icon, setIcon] = useState("");
      const [weatherForecast, setWeatherForecast] = useState([]);

      const _locState = useSelector((state) => state.location.location.payload);
      // this is a trigger to change data in view. controlling using state management
      const _changeData = useSelector((state) => state.location.changeData.payload);

      useEffect(() => {
            /* 
                  *NOTE
                  On app start up it sets up the devices current location and 
                  search weather data
            */
            _getCurrentLocation().then((location) => fetchData(location));
      }, []);

      useEffect(() => {
            console.log("chamge data", _changeData);
            // if change data is true set location to current else set the location to the specific location
            if (_changeData) {
                  setChangeData(false);
                  fetchData(_locState);
            } else {
                  _getCurrentLocation().then((location) => fetchData(location));
                  dispatch(setCurrentLocation(false));
            }
      }, [_changeData]);

      const fetchData = async (location) => {
            /*
                  *NOTE
                  we need two request because fectch current weather
                  is for current weather and fecth weather forcast is 
                  for upcoming weather updates
            */
            const dataForcast = await _fetchWeatherForcast(location);
            const dataCurrent = await _fetchCurrentWeather(location);
            setLoaded(true);
            setCity(dataCurrent.name);
            setCountry(dataCurrent.sys.country);
            setTempreture(Math.round(dataCurrent.main.temp));
            setHumidity(dataCurrent.main.humidity);
            setDescription(CapitalizeFirstLetter(dataCurrent.weather[0].description));
            setWindSpeed(dataCurrent.wind.speed);
            setIcon(dataCurrent.weather[0].icon.slice(0, -1));
            setWeatherForecast(_getWeahterForecast(dataForcast.list));
      };

      return loaded ? (
            <View style={styles.weatherContainer}>
                  <View style={styles.headerContainer}>
                        <Text style={styles.location_text}>{city}</Text>
                        <Text style={styles.country}>{country}</Text>
                  </View>
                  <View style={styles.bodyContainer}>
                        <Image
                              source={{
                                    uri: `https://openweathermap.org/img/wn/${icon}n@2x.png`,
                              }}
                              style={styles.weatherImg}
                        />

                        {/* <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} /> */}
                        <Text style={styles.temp}>{tempreture}°</Text>
                        <Text style={styles.description}>{description}</Text>
                        <View style={styles.exData}>
                              <View style={styles.exDataSection}>
                                    <Text>Wind</Text>
                                    <View style={styles.exDataText}>
                                          <MaterialCommunityIcons
                                                style={styles.exDataLogo}
                                                size={20}
                                                name="weather-windy"
                                                color={"#2F3543"}
                                          />
                                          <Text>{windSpeed} km/h</Text>
                                    </View>
                              </View>
                              <View style={styles.exDataSection}>
                                    <Text>Humidity</Text>
                                    <View style={styles.exDataText}>
                                          <MaterialCommunityIcons
                                                style={styles.exDataLogo}
                                                size={20}
                                                name="water"
                                                color={"#2F3543"}
                                          />
                                          <Text>{humidity} %</Text>
                                    </View>
                              </View>
                        </View>
                  </View>
                  <View style={styles.bottomContainer}>
                        {weatherForecast.map((weather, id) => (
                              <View key={id} style={styles.nextweather}>
                                    <Text style={styles.nextweatherDate}>
                                          {FormateDate(weather.dt_txt.split(" ")[0])}
                                    </Text>
                                    <Image
                                          source={{
                                                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon.slice(
                                                      0,
                                                      -1
                                                )}n.png`,
                                          }}
                                          style={styles.nextweatherImg}
                                    />
                                    <Text style={styles.nextweatherTemp}>
                                          {Math.floor(weather.weather_range[0])}° -{" "}
                                          {Math.floor(weather.weather_range[1])}°
                                    </Text>
                              </View>
                        ))}
                  </View>
            </View>
      ) : (
            <View style={styles.loadingSection}>
                  <Image
                        source={require("../assets/gifs/icons8-rain-cloud-100.png")}
                        style={styles.loadingImg}
                  />
                  <Text style={styles.loadingText}>Loading Data</Text>
            </View>
      );
};

export default Weather;
