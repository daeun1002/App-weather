import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import NaviBox from './NaviBox';
import LocationBox from './LocationBox';
import TodayBox from './TodayBox';
import WeekBox from './WeekBox';

export default function Weather({location, now, week}) {
  const iconId = now.weather[0].icon;
  const weekW = week.map(wi => wi.weather[0]);
  const weekArr = weekW.map(ww => ww.icon);
  const idArr = {
    "01d": {idSet : require('../assets/weather_icon/sun.png'), colors:['#007BF3', '#97C6E9']},
    "02d": {idSet : require('../assets/weather_icon/cloud_sun.png'), colors:['#007BF3', '#97C6E9']},
    "03d": {idSet : require('../assets/weather_icon/cloud.png'), colors:['#007BF3', '#97C6E9']},
    "04d": {idSet : require('../assets/weather_icon/clouds.png'), colors:['#2B6C8F', '#E9EEEE']},
    "09d": {idSet : require('../assets/weather_icon/rain.png'), colors:['#2B6C8F', '#E9EEEE']},
    "10d": {idSet : require('../assets/weather_icon/rain_sun.png'), colors:['#2B6C8F', '#E9EEEE']},
    "11d": {idSet : require('../assets/weather_icon/thunder.png'), colors:['#494F76', '#83929D']},
    "13d": {idSet : require('../assets/weather_icon/snow.png'), colors:['#9AB0CE', '#FFFFFF']},
    "50d": {idSet : require('../assets/weather_icon/fog.png'), colors:['#9AB0CE', '#FFFFFF']},
    "01n": {idSet : require('../assets/weather_icon/moon.png'), colors:['#09203F', '#537895']},
    "02n": {idSet : require('../assets/weather_icon/cloud_moon.png'), colors:['#09203F', '#537895']},
    "03n": {idSet : require('../assets/weather_icon/cloud.png'), colors:['#09203F', '#537895']},
    "04n": {idSet : require('../assets/weather_icon/clouds.png'), colors:['#2B6C8F', '#E9EEEE']},
    "09n": {idSet : require('../assets/weather_icon/rain.png'), colors:['#2B6C8F', '#E9EEEE']},
    "10n": {idSet : require('../assets/weather_icon/rain_moon.png'), colors:['#2B6C8F', '#E9EEEE']},
    "11n": {idSet : require('../assets/weather_icon/thunder.png'), colors:['#494F76', '#83929D']},
    "13n": {idSet : require('../assets/weather_icon/snow.png'), colors:['#9AB0CE', '#FFFFFF']},
    "50n": {idSet : require('../assets/weather_icon/fog.png'), colors:['#9AB0CE', '#FFFFFF']},
  };
  const back = idArr[iconId].colors;
  return ( 
    <LinearGradient colors={back} style={styles.container}>
      <SafeAreaView style={{flex:1}}>
        <NaviBox />
        <LocationBox place={location[0]} />
        <TodayBox now={now} week={week} iconId={iconId} idArr={idArr} />
        <WeekBox week={week} weekArr={weekArr} idArr={idArr} />
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});