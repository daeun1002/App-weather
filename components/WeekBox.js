import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

const WeekBox = ({week, weekArr, idArr}) => {
  const stamp = week.map(d => new Date(d.dt*1000));
  const unix = stamp.map(md => ({months:md.getMonth()+1, dates:md.getDate()}));
  const temper = week.map(t => ({"max":Math.round(t.temp.max), "min":Math.round(t.temp.min)}));
  const weeks = weekArr.map(wam => idArr[wam].idSet);
  const weekRain = week.map(wr => Math.round(wr.pop*100));
  return (
    <View style={styles.week}>
      <ScrollView horizontal={true}>
        <View>
          {/* <View style={{flexDirection:'row'}}>
            {
              unix.map((un, i) => (
                <View key={i} style={{width:90, height:25, marginHorizontal:15,
                                      justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight:'bold'}}>{un[0]} / {un[1]}</Text>
                </View>
              ))
            }
          </View> */}
          <View style={{flexDirection:'row'}}>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[0].months}/{unix[0].dates}</Text>
              <Image source={weeks[0]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                <Text>{temper[0].max}°/ </Text>
                <Text>{temper[0].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[0]}%</Text>
              </View>
            </View>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[1].months}/{unix[1].dates}</Text>
              <Image source={weeks[1]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>    
                <Text>{temper[1].max}°/ </Text>
                <Text>{temper[1].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[1]}%</Text>
              </View>
            </View>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[2].months}/{unix[2].dates}</Text>
              <Image source={weeks[2]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                <Text>{temper[2].max}°/ </Text>
                <Text>{temper[2].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[2]}%</Text>
              </View>
            </View>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[3].months}/{unix[3].dates}</Text>
              <Image source={weeks[3]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                <Text>{temper[3].max}°/ </Text>
                <Text>{temper[3].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[3]}%</Text>
              </View>
            </View>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[4].months}/{unix[4].dates}</Text>
              <Image source={weeks[4]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                <Text>{temper[4].max}°/ </Text>
                <Text>{temper[4].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[4]}%</Text>
              </View>
            </View>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[5].months}/{unix[5].dates}</Text>
              <Image source={weeks[5]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                <Text>{temper[5].max}°/ </Text>
                <Text>{temper[5].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[5]}%</Text>
              </View>
            </View>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[6].months}/{unix[6].dates}</Text>
              <Image source={weeks[6]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                <Text>{temper[6].max}°/ </Text>
                <Text>{temper[6].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[6]}%</Text>
              </View>
            </View>
            <View style={styles.weekBottom}>
              <Text style={{fontWeight:'bold', textAlign:'center'}}>{unix[7].months}/{unix[7].dates}</Text>
              <Image source={weeks[7]} style={styles.week_icon} />
              <View style={{width:90, flexDirection:'row', justifyContent:'center', marginBottom:5}}>
                <Text>{temper[7].max}°/ </Text>
                <Text>{temper[7].min}°</Text>
              </View>
              <View style={{width:90, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Icon name="droplet" style={{marginRight:5}} />
                <Text>{weekRain[7]}%</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  week: {
    flex:2
  },
  weekText: {
    textAlign:'center',
    fontSize:16
  },
  weekTop: {
    width:90,
    height:20,
    backgroundColor:'#ededed',
    flexDirection:'row'
  },  
  weekBottom: {
    width:90,
    height:'auto',
    backgroundColor:'rgba(255,255,255,.5)',
    borderRadius:10,
    marginHorizontal:15,
    marginTop:5,
    paddingVertical:10
  },
  week_icon: {
    width:70,
    height:70,
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:10
  }
});

export default WeekBox