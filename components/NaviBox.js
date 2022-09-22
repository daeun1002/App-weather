import React from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const NaviBox = () => {
  return (
    <View style={styles.naviContainer}>
      <TouchableOpacity>
        <Icon name="menu" style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity onClick={() => <TextInput placeholder="장소를 입력하세요" />}>
        <Icon name="search" style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  naviContainer: {
    flex:0.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20
  },
  menuIcon: {
    fontSize:40,
    color:'#fff'
  },
  searchIcon: {
    fontSize:30,
    color:'#fff'
  }
})

export default NaviBox