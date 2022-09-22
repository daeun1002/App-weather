import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const LocationBox = ({place}) => {
  // 현재 시간
  const dt = new Date();
  // 요일
  const dt_day = dt.getDay();
  const wk = ["일요일", "화요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const nowDay = wk[dt_day];
  // 시간 - 오전/오후 - 분
  let dt_hour = dt.getHours();
  if(dt_hour == 0) {
    dt_hour = "오전 " + 12
  }else if(dt_hour > 11) {
    dt_hour = "오후 " + (dt_hour - 12)
  }else {
    dt_hour = "오전 " + dt_hour 
  }
  let dt_min = dt.getMinutes();
  if(dt_min < 10) {
    dt_min = '0' + dt_min
  }
  // 현재 시간 정리
  const nowDt = dt.getMonth()+1 + "월 " + dt.getDate() + "일 " + nowDay + " " + dt_hour + ":" + dt_min;
  return (
    <View style={styles.locationContainer}>
      <View style={styles.placeWrap}>
        <Icon name="location-sharp" style={styles.placeIcon} />
        <Text style={styles.placeText}>{place.street}, {place.region}</Text>
      </View>
      <View style={styles.timeWrap}>
        <Text style={styles.timeText}>{nowDt}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  locationContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  placeWrap: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  placeIcon: {
    fontSize:25,
    marginRight:5,
    color:'#fff'
  },
  placeText: {
    fontSize:25,
    fontWeight:'500',
    color:'#fff'
  },
  timeWrap: {
    justifyContent:'center',
    alignItems:'center'
  },
  timeText: {
    color:'#fff'
  }
})

export default LocationBox