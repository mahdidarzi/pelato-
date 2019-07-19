import React from 'react';
import {Image,AsyncStorage,FlatList} from "react-native";
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,FooterTab,Footer,Body,Card,CardItem} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class subscribe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subscribe:[],
            apiToken:null,
            // m:await AsyncStorage.getItem('apiToken'),
        }
    }
    componentWillMount() {
          this.subscribe();
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
                  <FlatList
                    data={this.state.subscribe}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=> 
                  
                  <Card>
                  <CardItem >
                  <Left>
                  <Text>{item.username} </Text>
                  </Left>
                    <Right>
                    <Text>0{item.phonenumber}</Text>
                    </Right>
                   </CardItem>
                 </Card>
                }
                />
            </Container>
        )
    }
    async subscribe() {
        try {
           
            var apiToken = await AsyncStorage.getItem('apiToken');
            this.setState({apiToken:apiToken})
            let api_t=apiToken;
            console.log(apiToken);
            // alert(apiToken+'s')
            // return apiToken== null
            //     ?  await alert('null')
            //     : await this.setState({
            //       an:apiToken
                  
            //     });
      
            let response = await fetch('http://192.168.88.2:8000/api/v1/subscribe', {
                method : 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    api_token:api_t
                })
            });
           
            let json = await response.json();
            console.log(json);
            console.log(json.data);
            console.log(json.data.data);
            if(json.code==200){
                this.setState({subscribe:json.data})
                console.log('json.data');
            }
            if(json.code==422){
                Actions.lightbox({show:16})
            }
        } catch(error) {
            console.log(error);
        }
      }
      async print() {
        try {
            let apiToken = await AsyncStorage.getItem('apiToken');
            this.setState({apiToken:apiToken})
            // console.log('s'+apiToken);
            // this.setState({an:apiToken});
            // this.get_wallet(apiToken);
            // alert(apiToken)
            return apiToken== null
                ?  await alert('null')
                : await this.setState({
                  an:apiToken
                  
                });
                console.log('2'+apiToken);
                console.log('3'+an);
               
        } catch(error) {
            console.log(error)
        }
    }
}