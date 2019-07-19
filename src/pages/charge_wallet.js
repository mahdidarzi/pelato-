// import React from 'react';
// import {View, Text, Item, Icon , Container , Header , Left , Right , Button , Spinner} from 'native-base';
// import {AsyncStorage , WebView } from "react-native";

// import { Actions } from 'react-native-router-flux';

// export default class charge_wallet extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       apiToken: null,
//       price:0,
//   }
  
//   }
//     componentWillMount() {
//       AsyncStorage.getItem('apiToken' , (error , apiToken) => this.setState({ apiToken:apiToken }))
     
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
//                 <Text>{apiToken}</Text>
                
//                 {/* { apiToken == null ?this.renderLoading() : this.renderWebView(room_id)} */}
//                 <TextInput 
//                placeholder='لطفا مبلغ را وارد کنید'
//                style={styles.textinput}
//                onChangeText={(price)=> this.setState({price})}
//                secureTextEntry
               
//               />
                
//             </Container>

//         )
//     }
//     renderLoading() {
//         return <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' }}>
//             <Spinner color="#2c3e50" />
//         </View>
//     }
//     renderWebView() {
//         let apiToken = await AsyncStorage.getItem('apiToken');
//         return <WebView
        
//             source={{uri: 'http://192.168.193.2:8000/api/v1/test' , method : 'POST' , body : `price=${this.state.price}&api_token=${apiToken}` }}
//             startInLoadingState={true}
//             renderLoading={this.renderLoading}
//         />
//     }
// }
import React from 'react';
import {View, Text, Item, Icon,Card,CardItem,Left,Right} from 'native-base';
import {Image,AsyncStorage,FlatList} from "react-native";

import { Actions } from 'react-native-router-flux';

export default class subscribe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subscribe:[],
        }
    }
    componentWillMount() {
        console.log(this.state.subscribe.length);
      
   
          this.subscribe();
          setTimeout(console.log(this.state.subscribe.length),1000);
      
    }
    render() {
        return (
            <View>
                  <FlatList
                    data={this.state.subscribe}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=> 
                  
                  <Card>
                  <CardItem >
                  <Left>
                  </Left>
                    <Text>{item.phonenumber} </Text>
                    <Right>
                    </Right>
                   </CardItem>
                 </Card>
                }
                />
            </View>
        )
    }
    async subscribe() {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
      
            let response = await fetch('http://192.168.88.2:8000/api/v1/subscribe', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    api_token:apiToken,
                    
                })
            });
           
            let json = await response.json();
            console.log(json.data);
            
            this.setState({subscribe:json})
            console.log('s'+json.data);
            if(json.data=='null'){
alert('empty')
            }
            // we can use of response.code
           
      
        } catch(error) {
            console.log(error);
        }
      }
}