import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { StyleSheet, View } from 'react-native';
import Loading from './components/Loading';
import Weather from './components/Weather';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState();
  const [now, setNow] = useState([]);
  const [week, setWeek] = useState([]);

  const API_KEY = 'f3d27bb5def575995ef57a82c7245b79';
  const getLocation = async () => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted) {
      setIsLoaded(false);
    }

    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    setLocation(await Location.reverseGeocodeAsync(
      {latitude, longitude},
      {useGoogleMaps:false}
    ));

    const fetchApi = await(
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      )
    ).json();

    setNow(fetchApi.current);
    setWeek(fetchApi.daily);    

    return setIsLoaded(true);
  };

  useEffect(() => {
    getLocation()
  }, []);
  return (
    <View style={styles.container}>
      {
        isLoaded ? (
          <Weather location={location} now={now} week={week} />
        ) : (
          <Loading />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});