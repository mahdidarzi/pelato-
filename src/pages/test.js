import React, { Component } from 'react';
import { AsyncStorage , FlatList ,StyleSheet,Image,TouchableOpacity,BackHandler,ToastAndroid,ActivityIndicator} from 'react-native';
import {Actions} from "react-native-router-flux";
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,CardItem,Card,Body,Radio,ListItem,CheckBox} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
export default class test extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      an:0,
      activeChechBox:[],
      radionumber:'radioBtns1',
      styleshow:'a',
     
    }
}

 


  render() {

 var { activeChechBox }=this.state;

    var myloop = [];

for (let i = 0; i < 10; i++) {
  myloop.push(
    <View key={i}>
    <Text>{i}</Text>
    </View>
  );
}

    if (this.state.loading==true) {

      return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>


      );

    }
    return (
        <Container style={{ backgroundColor : '#2d3436'}}>
        <Header   style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                       <Left style={{marginRight:10,marginLeft:5}}>
                        <Icon  name="md-menu" onPress={() => Actions.drawerOpen() } style={{ color : 'white' , fontWeight : 500,fontSize:35,}}/>
                    </Left> 
                    <Left style={{marginRight:30,marginLeft:-60}}>
                    <Image  source={require('./../assets/image/pelatos.png')}  style={styles.backgroundImage}/>
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
                <Header   style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">

                <Text>{this.state.styleshow}</Text>

                 <Icon onPress={()=>this.setState({styleshow: (this.state.styleshow=='a'?'b':this.state.styleshow=='b'?'c':this.state.styleshow=='c'?'d':'a') })} name={  (this.state.styleshow=='a'?'person':'heart') }   style={{marginTop:5,color:'#00BCD4'}}/> 
                      
                   

                     
                </Header>
                <Content>
          <ListItem selected={false} >
            <Left>
              <Text>radiobtns1</Text>
            </Left>
            <Right>
              <Radio 
              onPress={() => this.setState({radionumber:'radiobtns1'}) }
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={(this.state.radionumber=='radiobtns1'?true:false)}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>radibtns2</Text>
            </Left>
            <Right>
              <Radio
              onPress={() => this.setState({radionumber:'radiobtns2'}) }
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={(this.state.radionumber=='radiobtns2'?true:false)}
              />
            </Right>
          </ListItem>
          <ListItem>
         
            <CheckBox onPress={()=>activeChechBox.find((x)=> x.name =='Daily Stand Up')? this._disableCheckBox(activeChechBox.findIndex((x)=> x.name =='Daily Stand Up')) : this._activeChechBox({name:'Daily Stand Up'})}  checked={activeChechBox.find((x)=> x.name =='Daily Stand Up')?true:false} />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox  onPress={()=>activeChechBox.find((x)=> x.name =='Discussion with Client')? this._disableCheckBox(activeChechBox.findIndex((x)=> x.name =='Discussion with Client')) : this._activeChechBox({name:'Discussion with Client'})} checked={activeChechBox.find((x)=> x.name =='Discussion with Client')?true:false} />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
        </Content>
      
      </Container>
    );
    
  }

  _disableCheckBox(pos){

    



var arr=this.state.activeChechBox;

console.log(arr);

console.log(pos)

arr.splice(pos,1);

this.setState({activeChechBox:arr})

console.log(pos)



 
  }

  _activeChechBox(checkBoxName){

  //  this.state.activeChechBox.push(checkBoxName);
  
    console.log(this.state.activeChechBox.findIndex((x)=> x.name ==checkBoxName))

   this.setState(prevState => ({
      activeChechBox: [...prevState.activeChechBox,checkBoxName ]
    }));

  

  }
searchFilterFunction = text => {
  this.setState({
    value: text,
  });

  const newData = this.arrayholder.filter(item => {
    const itemData = `${item.title} ${item.body}`;
    const textData = text;

    return itemData.indexOf(textData) > -1;
  });
  setTimeout(() => {
    if (newData.length== 0 && text.length>=1)
{ 
    
    this.setState({show_search:1,show_spiner:1})
}
else{
    this.setState({show_search:0,show_spiner:0})
}
    
      
}, 5000)
  this.setState({
    count: newData,
  });
};

}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',

  },
  gradiant:{
    width:400,height:100,
    marginTop:0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
