import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TodayDesc from './TodayDesc';

const TodayBox = ({now, week, iconId, idArr}) => {
  const nowTemp = Math.round(now.temp);
  const weekToday = [Math.round(week[0].temp.max), Math.round(week[0].temp.min)];
  const iconSrc = idArr[iconId].idSet;
  return (
    <View style={styles.todayWhole}>
      <View style={styles.todayContainer}>
        <View style={styles.tempWrap}>
          <Text style={styles.tempText}>{nowTemp}°</Text>
          <View style={{flexDirection:'row', marginLeft:50}}>
            <Text style={styles.mmTemp}>{weekToday[0]}°/ </Text>
            <Text style={styles.mmTemp}>{weekToday[1]}°</Text>
          </View>
        </View>
        <View style={styles.weatherImgWrap}>
          <Image source={iconSrc} style={styles.weatherImg} />
        </View>
      </View>
      <TodayDesc now={now} week={week} />
    </View>
  )
}

const styles = StyleSheet.create({
  todayWhole: {
    flex:4,
    justifyContent:'center'
  },
  todayContainer: {
    flexDirection:'row'
  },
  tempWrap: {
    flex:3
  },
  tempText: {
    fontSize:85,
    fontWeight:'500',
    textAlign:'right',
    color:'#fff'
  },
  mmTemp: {
    fontSize:20,
    fontWeight:'bold',
    color:'#fff'
  },
  weatherImgWrap: {
    flex:4,
    alignItems:'center'
  },
  weatherImg: {
    width:150,
    height:150
  }
})

export default TodayBox