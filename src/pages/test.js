import React, { Component } from 'react';
import { AsyncStorage , FlatList ,StyleSheet,Image,TouchableOpacity,BackHandler,ToastAndroid,ActivityIndicator} from 'react-native';
import {Actions} from "react-native-router-flux";
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,CardItem,Card,Body,Radio,ListItem,CheckBox} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './../assets/styles/styles'
export default class test extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      an:0,
    
     
    }
}

  render() {

    return(
      <Text>s</Text>
    )


    
  }

 

  hi(){

  alert('hello')

  }

}
var obj =new test;
console.log(obj);

