import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { SocialIcon,Avatar,Icon } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';  

export default class App extends Component {
  render() {
    return (
      <View style={styles.maincontainer}>

      <FloatingAction style={{position:'absolute', zIndex:0}}/>

          <View style={{height:50, flexDirection: 'row', justifyContent: 'flex-end'}} >

                 <View style={{width:70, alignItems:'center'}}>
                        <Avatar
                            small
                            rounded
                            source={{uri: ""https://images.scribblelive.com/2017/12/17/65590cfd-28a5-4b63-b50f-a6a029108217_500.jpg""}}
                            activeOpacity={0.7}
                          />
                  </View>   
                  <View style={{flex:1}}>
                    <Text style={{fontWeight:'bold',fontSize:26,color:'black'}}>Home</Text>
                  </View> 

          </View>

          <View style={{height: 70, flexDirection:'row', elevation: 1, alignItems: 'center' , justifyContent:'space-between', borderBottomWidth:0.1}}>

                  <View style={{width:70}}>
                        <Icon
                                name='home'
                                type='feather'
                                color='#0084b4'
                              />
                  </View>
                   <View style={{width:70}}>
                        <Icon
                                name='search'
                                type='evilicon'
                                color='#0084b4'
                                size={30}
                              />
                  </View>
                   <View style={{width:70}}>
                        <Icon
                                name='ios-notifications-outline'
                                type='ionicon'
                                color='#0084b4'
                                size={30}
                              />
                  </View>
                   <View style={{width:70}}>
                        <Icon
                                name='envelope'
                                type='simple-line-icon'
                                color='#0084b4'
                              />
                  </View>

          </View>   

          <View style={{flex:1, elevation:2}}>

              <View style={{flexDirection:'row'}}>
                 <View style={{height:30, width:50, paddingTop:10, paddingHorizontal:20}}>
                    <Avatar
                            small
                            rounded
                            source={{uri: "https://i.pinimg.com/736x/05/26/c1/0526c188e86fe197ce4e8dcffce76e00--positive-uplifting-quotes-positive-sayings.jpg"}}
                            activeOpacity={0.7}
                      />
                  </View> 
                  <View style={{paddingTop:10, paddingHorizontal:10, alignItems:'center'}}><Text>Chipcoffey</Text></View>
              </View>

              <View style={{justifyContent:'flex-start', elevation:2,paddingLeft:60}} >
                    <Text style={{paddingTop:5, textAlignVertical: 'top' }}>Thought for the day: Don't worry about the people in your past. There's a reason they didn't make it to your future.</Text>
                    <Image style={{paddingTop:20,height:150, width:300,resizeMode: 'contain'}} source={{uri: 'https://i.pinimg.com/736x/b6/7e/2b/b67e2b1d3af63153684303d5eebf106f--positive-mind-positive-vibes.jpg'}}/>
              </View>
             
          </View> 

          <View style={{flex:1, elevation:2}}>

              <View style={{flexDirection:'row'}}>
                 <View style={{height:30, width:50, paddingTop:10, paddingHorizontal:20}}>
                    <Avatar
                            small
                            rounded
                            source={{uri: "https://s-media-cache-ak0.pinimg.com/originals/de/3f/7f/de3f7fa53ab53b43f208bfb431a1902e.jpg"}}
                            activeOpacity={0.7}
                      />
                  </View> 
                  <View style={{paddingTop:10, paddingHorizontal:10, alignItems:'center'}}><Text>David Livingstone</Text></View>
              </View>

              <View style={{justifyContent:'flex-start', elevation:2,paddingLeft:60}} >
                    <Text style={{paddingTop:5, textAlignVertical: 'top' }}> “If a commission by an earthly king is considered an honor, how can a commission by a Heavenly King be considered a sacrifice?”  </Text>
                    <Image style={{zIndex:-1,position:'relative', paddingTop:20,height:150, width:300,resizeMode: 'contain'}} source={{uri: 'http://www.christianitytoday.com/images/67405.jpg?w=700'}}/>
              </View>
          </View> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start',
    paddingTop: 40
  },
});

