import React from 'react';
import {View, Text, Item, Icon , Container , Header , Left , Right , Button , Spinner,Body} from 'native-base';
import {AsyncStorage , WebView , Image } from "react-native";

import { Actions } from 'react-native-router-flux';

export default class vebview extends React.Component {
  constructor(){
    super();
    this.state = {
      apiToken: null
  }
  
  }
    componentWillMount() {
      AsyncStorage.getItem('apiToken' , (error , apiToken) => this.setState({ apiToken:apiToken }))
     
    }
    render() {
        const { room_id } = this.props;
        const { apiToken } = this.state;
        console.log(room_id);
        console.log(this.props.room_id);
        console.log(typeof (room_id));
        return (
            <Container>
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
                {/* <Text>{apiToken}</Text> */}
                {/* { apiToken == null ?this.renderLoading() : this.renderWebView(room_id)} */}
              {this.props.forWallet!=1? apiToken != null  ?this.renderWebView(room_id):  this.renderLoading() :null}  
                { this.props.forWallet == 1  ?this.renderWebViewForChargeWallet() : null}
                {/* { apiToken === null ?  null:this.renderWebView(room_id)} this.renderLoading() */}
            </Container>

        )
    }
    renderLoading() {
        return <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' }}>
            <Spinner color="#2c3e50" />
        </View>
    }
    renderWebView(room_id) {
        var a='4_pelato_5579';
        
        return <WebView
            source={{uri: 'http://192.168.88.2:8000/api/v1/buy' , method : 'POST' , body : `api_token=${this.state.apiToken}&romtiming_id=${room_id}` }}
            startInLoadingState={true}
            renderLoading={this.renderLoading}
        />
    }
    renderWebViewForChargeWallet() {
        var a='4_pelato_5579';
        
        return <WebView
        source={{uri: 'http://192.168.88.2:8000/api/v1/chargewallet' , method : 'POST' , body : `api_token=${this.props.apiToken}&price=${this.props.price}` }}
        startInLoadingState={true}
        renderLoading={this.renderLoading}
    />
    }
}