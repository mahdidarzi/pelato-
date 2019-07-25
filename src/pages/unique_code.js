import React from 'react';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Body,Item,Input} from 'native-base';
import {Image,AsyncStorage} from "react-native";
import headerStyles from './../assets/styles/header';
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

            <Header   style = {headerStyles.header} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">

<Left style={{marginRight:10,marginLeft:5}}>

 <Icon  name="md-menu" onPress={() => Actions.drawerOpen() } style={headerStyles.drawer}/>

</Left> 

<Left style={headerStyles.left1}>

<Image  source={require('./../assets/image/pelatos.png')}/>

</Left> 

<Body style={headerStyles.body}><Text style={{color:'white',fontSize:22}}> پنل کاربری پلاتو</Text></Body>

<Left style={headerStyles.left2}>

   <View  style={headerStyles.personIconView}>

<Icon  name='person'   style={headerStyles.personIcon}/>

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