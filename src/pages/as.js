// import React from 'react';
// import {View, Text, Item, Icon , Container , Header , Left , Right , Button , Spinner} from 'native-base';
// import {AsyncStorage , WebView,TextInput, } from "react-native";

// import { Actions } from 'react-native-router-flux';

// export default class as extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       price:0,
//   }
  
//   }
//     componentWillMount() {
//         this.renderWebView()
     
//     }
//     render() {
//         return (
//             <Container>
//                 <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
//                     <Left>
//                         <Button transparent onPress={() => Actions.reset('root')}>
//                             <Icon name='md-arrow-round-back'/>
//                         </Button>
//                     </Left>
//                     <Right>
//                         <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>خرید : </Text>
//                     </Right>
//                 </Header>
                
                
//                 {/* { apiToken == null ?this.renderLoading() : this.renderWebView(room_id)} */}
//                 <TextInput 
//                placeholder='لطفا مبلغ را وارد کنید'
//                onChangeText={(price)=> this.setState({price})}    />
//               <Button onPress={()=>this.renderWebView()}><Text>پرداخت</Text></Button>
                
//             </Container>

//         )
//     }
//     renderLoading() {
//         return <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' }}>
//             <Spinner color="#2c3e50" />
//         </View>
//     }
//     async renderWebView() {
//         alert('asd')
//         // let apiToken= await AsyncStorage.getItem('apiToken');
//         return <WebView
        
//             source={{uri: 'http://192.168.193.2:8000/api/v1/chargewallet' , method : 'POST' , body : `price=${this.state.price}&api_token=${apiToken}` }}
//             startInLoadingState={true}
//             renderLoading={this.renderLoading}
//         />
//     }
// }
import React from 'react';
import {View, Text, Item, Icon , Container , Header , Left , Right , Button , Spinner} from 'native-base';
import {AsyncStorage , WebView,TextInput, } from "react-native";

import { Actions } from 'react-native-router-flux';
export default class vebview extends React.Component {
  constructor(){
    super();
    this.state = {
      apiToken: null,
      on:0,
      show:true,
      price:0,
  }
  
  }
    componentWillMount() {
      AsyncStorage.getItem('apiToken' , (error , apiToken) => this.setState({ apiToken:apiToken }));
    
     
    }
    render() {
        const {apiToken,on,show,price} = this.state;
      
        return (
            <Container>
                <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
          <Left>
              <Icon name="md-menu" onPress={() => Actions.drawerOpen() } style={{ color : 'white' , fontWeight : 500 }}/>
             
          </Left>
          <Right>
              <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>صفحه اصلی</Text>
          </Right>
          
      </Header>
                <Text>{apiToken}</Text>
{show==true?
    [<TextInput key='a'
        placeholder='لطفا مبلغ را وارد کنید'
        onChangeText={(price)=> this.setState({price})}    />,<Button key='b' onPress={()=>this.pay()}><Text>پرداخت</Text></Button>]:null}

              {on==1?apiToken!= null? this.renderWebView(): this.renderLoading():null}
              {/* {loading==true?this.renderLoading():null} */}
            </Container>

        )
    }
    renderLoading() {
        return <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' }}>
            <Spinner  color="#2c3e50" />
        </View>
    }
    renderWebView() {
        return <WebView
            source={{uri: 'http://192.168.88.2:8000/api/v1/chargewallet' , method : 'POST' , body : `price=${price}&api_token=${this.state.apiToken}` }}
            startInLoadingState={true}
            renderLoading={this.renderLoading}
        />
    }
    pay(){
        if(this.state.price==0){
alert('لطفا مبلغ را وارد کنید')
        }
        if(this.state.price<1000 && this.state.price!=0){
            alert('مبلغ مورد نظر را بالاتر وارد کنید')
                    }
                    if(this.state.price>=1000){
                        this.setState({on:1,show:false})
                                }
    }
}