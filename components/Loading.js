import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading() {
  const animateRotation = useRef(new Animated.Value(0)).current;
  const animate = () => {
    Animated.loop(
      Animated.timing(
        animateRotation, {
          toValue:1,
          duration:1800,
          easing:Easing.linear,
          useNativeDriver:true
        }
      )
    ).start()
  }
  const rotation = animateRotation.interpolate({
    inputRange:[0, 0.5],
    outputRange:['0deg', '360deg']
  });

  useEffect(() => {
    animate(3000);
  })
  return (
    <LinearGradient 
      colors={['#f3e7e9', '#e3eeff']}
      style={styles.loadingContainer}>
      <Animated.Image source={require('../assets/loading.png')} 
                      style={{width:40, height:40, transform:[{rotate:rotation}]}} />
      <Text style={styles.loadingText}>잠시만 기다려주세요</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  loadingText: {
    fontSize:15,
    fontWeight:'bold',
    color:'#333',
    marginTop:30
  }
});