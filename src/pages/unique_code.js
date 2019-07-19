import React from 'react';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Body,Item,Input} from 'native-base';
import {Image,AsyncStorage} from "react-native";

import { Actions } from 'react-native-router-flux';

export default class unique_code extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            unique_code:null
        }
    }
    componentWillMount() {
        
        this.print();
    }
    render() {
        return (
            <Container style={{ backgroundColor : '#2d3436'}}>
            <Header   style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
            <Left style={{marginRight:10,marginLeft:5}}>
             <Icon  name="md-menu" onPress={() => Actions.drawerOpen() } style={{ color : 'white' , fontWeight : 500,fontSize:35,}}/>
         </Left> 
         <Left style={{marginRight:30,marginLeft:-60}}>
         <Image  source={require('./../assets/image/pelatos.png')}  />
         </Left> 
         {/* <Right style={{marginLeft:10}}>
       <Text style={{color:'white',fontSize:14}}> پنل کاربری پلاتو</Text>
         </Right>  */}
            <Body style={{marginRight:0,marginLeft:-10}}><Text style={{color:'white',fontSize:22}}> پنل کاربری پلاتو</Text></Body>
         <Left style={{marginLeft:5,marginRight:-20}}>
               <View  style={{ backgroundColor : '#607D8B',width:40,height:40,borderRadius:20,marginTop:3,alignItems:'center'}}>
        <Icon  name='person'   style={{marginTop:5,color:'#00BCD4'}}/>
            </View>
         </Left> 
           
     </Header>
     
     
     
            <View style={{alignItems:'center',marginTop:220,marginBottom:220}}>
               <Text style={{color:'white',fontSize:30}}>{this.state.unique_code}</Text>
            </View>
            </Container>
        )
    }
    async print() {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
            this.setState({unique_code:apiToken});
               
        } catch(error) {
            console.log(error)
        }
    }
}