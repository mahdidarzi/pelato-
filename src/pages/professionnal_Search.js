import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {Container,Header,Title,Content,Footer,FooterTab,Button,Left, Right,Body,Icon,Text,View} from 'native-base';
export default class professionnal_Search extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
   
    
}
componentWillMount(){
}
  render() {
    const{date1,date2,show,show2}=this.props;
   
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <Text> ثبت موقعیت مکانی  </Text>
        <Button><Text>ثبت</Text></Button>
        <Text>تاریخ</Text>
        <View style={{flexDirection:'row'}}>
        <Text>از</Text>
        {/* <Button onPress={()=>Actions.lightbox({show:18})}><Text>{this.props.date1=='undefined'?'s':date1}</Text></Button> */}
        <Button onPress={()=>Actions.lightbox({show:18})}><Text>{show==1?date1:'.../.../..'}</Text></Button>
        <Text>تا</Text>
        <Button onPress={()=>Actions.lightbox({show:19})}><Text>{show2==1?date2:'.../.../..'}</Text></Button>
        </View>
        <Text>زمان</Text>
        <View style={{flexDirection:'row'}}>
        <Text>از</Text>
        <Button><Text>--:--</Text></Button>
        <Text>تا</Text>
         <Button><Text>--:--</Text></Button>
        </View>
        <Text>متراژ</Text>
        <View style={{flexDirection:'row'}}>
        <Text>از</Text>
        <Button><Text>--:--</Text></Button>
        <Text>تا</Text>
         <Button><Text>--:--</Text></Button>
        </View>
        <Text>قیمت</Text>
        <View style={{flexDirection:'row'}}>
        <Text>از</Text>
        <Button><Text>--:--</Text></Button>
        <Text>تا</Text>
         <Button><Text>--:--</Text></Button>
        </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}