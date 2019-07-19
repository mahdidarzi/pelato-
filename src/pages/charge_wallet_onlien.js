import React from 'react';
import {View, Text, Item, Icon , Container , Header , Left , Right , Button , Spinner} from 'native-base';
import {AsyncStorage , WebView } from "react-native";

import { Actions } from 'react-native-router-flux';

export default class charge_wallet_onlien extends React.Component {
  constructor(){
    super();
    this.state = {
      apiToken: null,
      price:0,
  }
  
  }
    componentWillMount() {
      AsyncStorage.getItem('apiToken' , (error , apiToken) => this.setState({ apiToken:apiToken }))
     
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                    <Left>
                        <Button transparent onPress={() => Actions.reset('root')}>
                            <Icon name='md-arrow-round-back'/>
                        </Button>
                    </Left>
                    <Right>
                        <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>خرید : </Text>
                    </Right>
                </Header>
                <Text>{apiToken}</Text>
                
                {/* { apiToken == null ?this.renderLoading() : this.renderWebView(room_id)} */}
                <TextInput 
               placeholder='لطفا مبلغ را وارد کنید'
               style={styles.textinput}
               onChangeText={(price)=> this.setState({price})}
               secureTextEntry
               
              />
                
            </Container>

        )
    }
    renderLoading() {
        return <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' }}>
            <Spinner color="#2c3e50" />
        </View>
    }
    async renderWebView() {
        let apiToken = await AsyncStorage.getItem('apiToken');
        return <WebView
        
            source={{uri: 'http://192.168.88.2:8000/api/v1/test' , method : 'POST' , body : `price=${this.state.price}&api_token=${apiToken}` }}
            startInLoadingState={true}
            renderLoading={this.renderLoading}
        />
    }
}