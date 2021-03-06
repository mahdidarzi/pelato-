import React from 'react';
import { AsyncStorage , FlatList ,StyleSheet,Image,TouchableOpacity,BackHandler,ToastAndroid,ScrollView} from 'react-native';
import {Container, Header, Right, Button, Content, Text, Left, Icon , View , Spinner,Input,Item,FooterTab,Footer,Body} from 'native-base';
import {Actions,Drawer } from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';

export default class goodest_centers extends React.Component {
    constructor(props){
        super(props);
        this.backCount = 0;
        this.onHandleBackButton = this.handleBackButton.bind(this);
        this.state = {
            total:0,
            goodest_centers : [],
            page : 1,
            loading : false,
            refreshing : false,
            centersid:0,
            goodest_centersf : [],
            show_search:0,
            show_spiner:0,
            arrayTest:
            [
                {price:2},
                {price:100}
            ]
        }
        this.arrayholder = [ ];
    }
    async componentWillMount() {
        
        BackHandler.addEventListener('hardwareBackPress', this.onHandleBackButton);
        this.getProductRequest();
        this. getProductRequestf();
    
        this.total(this.state.arrayTest);
        // setTimeout(() => {
        //     if (this.state.goodest_centers.length == 0 )
        //         alert('hi');
        // }, 4000)
  
 
}
handleBackButton() {
    console.log("back button - dashboard")

    if (this.backCount == 1 ) {
        BackHandler.exitApp();
        this.backCount = 2;
        return; // exit
    }
    else if(Actions.currentScene=='part1'){
// Actions.reset('home');
// alert('home');
    }
    else if(Actions.currentScene=='rooms'){
      // Actions.reset('part1');
      // alert('part1');
          }
          else if(Actions.currentScene=='date'){
            // Actions.reset('part1');
            // alert('part1');
                }
                  else if(Actions.currentScene=='factor'){
            // Actions.reset('part1');
            // alert('part1');
                }
                else if(Actions.currentScene=='as'){
                      }
                      else if(Actions.currentScene=='subscribe'){
                      }
                      else if(Actions.currentScene=='unique_code'){
                      }
                      else if(Actions.currentScene=='wallet'){
                      }
                      else if(Actions.currentScene=='wv'){
                      }
                      else if(Actions.currentScene=='unique_code'){
                      }
                      
    else if (this.backCount == 0) {

      ToastAndroid.show("لطفا دوبار برای  خروج از برنامه کلیک کنید", ToastAndroid.SHORT);
        this.backCount++;

        setTimeout(() => {
            if (this.backCount != 2)
                this.backCount = 0;
        }, 2000)

        return true;
    }
}
    
    render() {

      var myloop = [];
      for (let i = 0; i < 10; i++) {
        myloop.push(
          <View key={i}>
          <Text>{i}</Text>
          </View>
        );
      }
//         var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();

// if(dd<10) {
//     dd = '0'+dd
// } 

// if(mm<10) {
//     mm = '0'+mm
// } 

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
        // console.log(this.state.part1[1].id[3]);
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
             {this.state.show_search==1?<Text Style={{color:'white'}}> مرکز یافت نشد</Text>:null}
             {/* <TouchableOpacity style={{width:47,height:70,flexDirection:'row',backgroundColor:'white',flexWrap:'nowrap',}}><Text style={{marginLeft:10}}>{1000/10}</Text></TouchableOpacity> */}
             <View style={{alignItems:'center',marginTop:25,height:5,marginLeft:40,marginRight:40}}>
             <Item style={{height:35,width:200,padding:5,}} rounded style={{backgroundColor:'white'}}>
          <Icon  name="ios-search" />
          <Input style={{height:35,width:250,  alignItems: 'center',padding:5}} onChangeText={text => this.searchFilterFunction(text)} placeholder='جستحوی مرکز'  value={this.state.value}/>
        </Item>
            
                        </View>

                        {console.log(this.state.goodest_centers)}

                <FlatList style={{marginTop:50}}

                   ListEmptyComponent={() =>this.state.show_spiner==0?<Spinner/>:null}
                   ListFooterComponent={this.state.loading?null:< Spinner />}
                ListFooterComponent={this.renderFooter.bind(this)}
                   refreshing={this.state.refreshing}
                   onRefresh={this.handleRefresh.bind(this)}
                   onEndReached={this.handleLoadMore.bind(this)}
                   onEndReachedThreshold={0.7}
                    data={this.state.goodest_centers}
                    keyExtractor={(item) => item.id.toString()}
                  renderItem={({item})=>
                //   <TouchableOpacity onPress={()=>Actions.rooms({id:item.id})}>
                
                    <View key={item.id} style={styles.container}>
                    {/* <Image source={{uri:item.images.length==0?null:item.images[0].picture}} style={styles.image} /> */}
                    <View style={[styles.buttonView,{marginLeft:45,marginRight:45,marginBottom:5,marginTop:5}]}>
                  <Text style={{color: '#fff',fontSize:18,margin:-8, }}>برترین مراکز</Text>
              </View>
<View style={{  borderWidth: 3,
        borderColor:'white',
        borderRadius:8,
    }}>
     
    {/* { item.images.map((data) => {
                         
                           
                          return <ImageSlider  style={styles.image} images={[
                      
                            data.picture
                          

                                ]}
                                             autoPlayWithInterval={2000}/>
                         
                        })} */}
                        {this._show_image_slider( item.images )}
                    {/* <ImageSlider  style={styles.image} images={[
                      
                        // item.images.length==0?console.log('d'):item.images[0].picture,
                        // item.images.length<=1?console.log('d'):item.images[1].picture, 
                        // item.images.length<=2?console.log('d'):item.images[2].picture, 

                        //                                item.images.length==0?console.log('d'):item.images[0].picture,
                        // item.images.length<=1?console.log('d'):item.images[1].picture, 
                        // item.images.length<=2?console.log('d'):item.images[2].picture, 
                      //   item.images.map((data) => {
                         
                      //     data.picture[1]
                        
                      //  })
                            ]}
                                         autoPlayWithInterval={2000}/> */}
                                         </View>
                    <View key={item.id} style={{ padding : 10 , }}>
        
                         {/* <Image source={{uri:item.images[0]}} style={styles.image} /> */}
                         <Text note numberOfLines={2} style={[styles.body,{marginLeft:120,marginRight:120,color:'#00cec9',fontSize:16}]}>{item.name}</Text>
                         <Text note numberOfLines={2} style={styles.body}>نوع مرکز:پلاتو</Text>
                         <Text note  style={styles.body}> تعداد اتاق:{item.rooms.length}</Text>
                         <ScrollView style={styles.property}>
                         <Text style={[styles.body,{color:'white'}]}>ویژگی ها</Text>
                         <View style={{flexDirection:'row'}}>
                        {item.center_attribute.length>=1?<Text style={styles.text_pro}>{item.center_attribute[0].name}</Text>:null}
                        {item.center_attribute.length>=2?<Text style={styles.text_pro}>{item.center_attribute[1].name}</Text>:null}
                        {item.center_attribute.length>=3?<Text style={styles.text_pro}>{item.center_attribute[2].name}</Text>:null}
                        {item.center_attribute.length>=4?<Text style={styles.text_pro}>{item.center_attribute[3].name}</Text>:null}
                        {item.center_attribute.length>=5?<Text style={styles.text_pro}>{item.center_attribute[4].name}</Text>:null}
                         </View>
                         <View style={{flexDirection:'row'}}>
                         {item.center_attribute.length>=6?<Text style={styles.text_pro}>{item.center_attribute[5].name}</Text>:null}
                         {item.center_attribute.length>=7?<Text style={styles.text_pro}>{item.center_attribute[6].name}</Text>:null}
                         {item.center_attribute.length>=8?<Text style={styles.text_pro}>{item.center_attribute[7].name}</Text>:null}
                         {item.center_attribute.length>=9?<Text style={styles.text_pro}>{item.center_attribute[8].name}</Text>:null}
                         {item.center_attribute.length>=10?<Text style={styles.text_pro}>{item.center_attribute[9].name}</Text>:null}
                         </View>

                         </ScrollView>
                         
                         <Text note style={styles.body}>{item.address}</Text>
                         {/* <Text note style={styles.body}>{item.description}</Text> */}
                         <TouchableOpacity onPress={()=>Actions.date({id:item.id,description:item.description})}  style={styles.reserve}>
                            <Text style={{color: '#fff',alignItems:'center',fontSize:16,margin:-8}}>مشاهده و رزرو مرکز</Text>
                        </TouchableOpacity>
                  
                         {/* <Text note numberOfLines={2} style={{color:'yellow'}}>{item.images.length==0?null:item.images.length}</Text> */}
                        
                    </View>
             
                </View>

               
              
                }
                />
                 <Footer >
          <FooterTab style={{ backgroundColor : '#34495e'}}>
            <Button style={{ backgroundColor : 'cyan'}} >
              <Text style={{fontSize:15,color:'black',}}>بهترین</Text>
              <Text style={{fontSize:15,color:'black',marginTop:2}}>مراکز</Text>
            </Button>
            <Button>
              <Text>جستجوی پیشرفته</Text>
            </Button>
            <Button onPress={()=>Actions.home()}>
              <Text style={{fontSize:16}}>مراکز</Text>
            </Button>
            <Button>
              <Text onPress={()=>Actions.wallet()} style={{fontSize:16}}>کیف پول</Text>
            </Button>
          </FooterTab>
        </Footer>
            </Container>
        )
    }
    _show_image_slider(images){
      array_images=[];
      if(images.length==0){
        array_images.push('http://learnenglishteens.britishcouncil.org/sites/teens/files/rs6095_thinkstockphotos-119692035_1-low.jpg');
      }
      for(let i=0; i<images.length; i++)
      {

        // console.log(images[i].picture+' item.images');
        console.log(images[i].picture+' item.images');
        array_images.push(images[i].picture);
      }
      console.log(array_images);
      return(

         <ImageSlider  style={styles.image} images={array_images}
                                         autoPlayWithInterval={2000}/> 

      )

    }
    // let response =  fetch(`http://192.168.193.2:8000/api/v1/pelato/${this.props.id}?page=${page}`);
    handleRefresh() {
        this.setState({ page : 1 , refreshing : true } , () => {
            this.getProductRequest();
        })
    }

    searchFilterFunction = text => {
        this.setState({
          value: text,
        });
        
        this.setState({ loading : true});
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item.name}`;
          const textData = text;
      
           
         
       
          return itemData.indexOf(textData) > -1;
          
          
        });
        // console.log(newData.length);
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
             goodest_centers: newData,
        });
       
      };
    renderFooter() {
       
        if(this.state.loading) return null;

        return <Spinner/>
    }

    handleLoadMore() {
        if(this.state.goodest_centers.length > 0) {
            this.setState({page : this.state.page + 1 , loading : true}, () => {
                this.getProductRequest()
            })
        }
    }
    total(array){
        console.log(array);
        console.log(array[0].price+'mahdi');
        console.log('mahdi');
        var payment =0;
    for (var i=0; i <array.length; i++) {
       payment+=array[i].price;
      
          
    } 
    console.log(payment+'last');
    this.setState({total:payment});
    // return payment;
    // console.log(payment);
    
    
      }
    async getProductRequestf() {
     
        try {
            const { page } = this.state;
            var urls=[
                `http://192.168.88.2:8000/api/v1/goodest_centersf`,
            ]
          
            let response = await fetch(urls);
            let json = await response.json();
          
            var goodest_centersf = json.data;
            this.arrayholder =  json.data;
            // console.log( this.arrayholder+'hjahskdkn')
         
           
        } catch(error) {
            console.log(error)
        }
    }
    async getProductRequest() {
       
        try {
            const { page } = this.state;
            var urls=[
                `http://192.168.88.2:8000/api/v1/goodest_centers?page=${page}`,
            ]
            await this.setState({ loading : true});
            let response = await fetch(urls);
            let json = await response.json();
          
            var goodest_centers = json.data.data;
            // console.log( goodest_centers+'goo')
            if(goodest_centers.length > 0) {
                this.setState(prevState => {
                  return {
                        goodest_centers : page === 1 ? goodest_centers : [...prevState.goodest_centers , ...goodest_centers],
                        page : json.data.current_page,
                        refreshing : false,
                        loading:false,   
                    }
                    
                       console.log('aoooooo');
                    
                })
                //i had a warninig for below command
                //hint: carefuly read warning
                // this.setState({ loading : false})

            }
            
         
            
             
            
        } catch(error) {
            console.log(error)
        }
        
        
    }
}

   
const styles=StyleSheet.create({
    container:{
      flex:1,
        margin: 5,
        backgroundColor : '#2f3542',
        elevation : 1,
        shadowColor : '#000',
        shadowOffset : { width : 0 , height: 20},
        shadowOpacity : .2,
        
    
},
image:{
    width :'100%',
    // marginLeft:13,
    // marginRight:13,
        height: 150,
        marginTop:1,
        borderRadius:8,
      
      
},
body:{
  color:'white',
  marginBottom:8,
  fontSize:16,
  marginLeft:5,
  marginTop:5,
 
    
},
property:{
    width : '100%',
    height: 100,
    backgroundColor:'#34495e',
    borderRadius : 10,
    borderWidth:1.8,
    borderColor:'white',
   
 
  },
  text_pro:{
    backgroundColor:'blue',
    color:'white',
    marginLeft:5,
    padding:3,
    marginTop:5,
    borderRadius : 5,
    borderColor:'white',
    borderWidth:1,
    padding:5
  },
  buttonView: {
    width:250,
    height:30,
    // marginTop: 50,
    backgroundColor:'gray',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth:1.3,
    borderColor:'white',
   
    
  },
  reserve:{
    width:300,
    height:30,
    marginTop: 5,
    backgroundColor:'green',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth:1.3,
    borderColor:'white',
    marginLeft:10,
    marginRight:10,
   
      
  }
 

})