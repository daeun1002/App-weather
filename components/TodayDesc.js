import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

const TodayDesc = ({now, week}) => {
  const nowWind = now.wind_speed;
  let windText;
  if(nowWind < 3.3) {
    windText = '약한 바람'
  }else if(nowWind < 7.9) {
    windText = '작은 나뭇가지가 흔들리는 정도의 바람'
  }else if(nowWind < 13.8) {
    windText = '큰 나뭇가지가 흔들리는 정도의 바람'
  }else if(nowWind < 17.1) {
    windText = '나무 전체가 흔들리는 정도의 바람'
  }else if(nowWind < 24.9) {
    windText = '나뭇가지가 꺾이는 정도의 바람'
  }else if(nowWind < 32.9) {
    windText = '나무가 쓰러지는 정도의 바람'
  }else if(nowWind < 43.9) {
    windText = '사람, 바위를 날리는 정도의 바람'
  }else {
    windText = '집을 무너뜨리는 정도의 바람'
  }
  const nowRain = week[0].pop*100;
  const nowFeelTemp = Math.round(now.feels_like);
  const nowSunr = new Date(now.sunrise*1000);
  const nowSuns = new Date(now.sunset*1000);
  let riseMin = nowSunr.getMinutes();
  let setMin = nowSuns.getMinutes();
  if(riseMin < 10, setMin < 10) {
    riseMin = '0' + riseMin;
    setMin = '0' + setMin;
  }
  let setHour = nowSuns.getHours();
  if(setHour > 11) {
    setHour = setHour - 12
  }else if(setHour == 0) {
    setHour = 12
  }
  const nowSunrise = nowSunr.getHours() + ":" + riseMin;
  const nowSunset = setHour + ":" + setMin;
  return (
    <View style={styles.descContainer}>
      <View style={styles.descScroll}>
        <View style={styles.descWrap}>
          <Icon name='droplet' style={styles.w_icon}/>
          <Text style={styles.w_text}>{nowRain}%</Text>
          <Text style={styles.w_textDesc}>오늘 비 올 확률이 {nowRain}%입니다.</Text>
        </View>
        <View style={styles.descWrap}>
          <Icon name='wind' style={styles.w_icon}/>
          <Text style={styles.w_text}>{nowWind} m/s</Text>
          <Text style={styles.w_textDesc}>{windText}</Text>
        </View>
        <View style={styles.descWrap}>
          <Icon name='thermometer' style={styles.w_icon}/>
          <Text style={styles.w_text}>{nowFeelTemp}°</Text>
          <Text style={styles.w_textDesc}>현재 체감온도는 {nowFeelTemp}°입니다.</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={[styles.descWrap, {width:'50%'}]}>
          <Icon name='sunrise' style={styles.w_icon}/>
          <Text style={styles.w_text}>{nowSunrise} am</Text>
        </View>
        <View style={[styles.descWrap, {width:'50%'}]}>
          <Icon name='sunset' style={styles.w_icon}/>
          <Text style={styles.w_text}>{nowSunset} pm</Text>
        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  descContainer: {
    height:250,
    paddingTop:30
  },
  descScroll: {
    width:'90%',
    backgroundColor:'rgba(255, 255, 255, .3)',
    borderRadius:15,
    marginLeft:'auto',
    marginRight:'auto',
    paddingHorizontal:20,
    paddingVertical:10
  },
  descWrap: {
    flexDirection:'row',
    alignItems:'center',
    height:40
  },
  w_icon: {
    fontSize:20,
    fontWeight:'bold'
  },
  w_text: {
    fontSize:15,
    width:80,
    textAlign:'center',
    fontWeight:'bold'
  },
  w_textDesc: {
    width:200,
    textAlign:'center'
  }
});

export default TodayDesc