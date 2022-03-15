import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View ,Dimensions,TextInput,Switch,TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function App() {
    const [size, set_size] = React.useState('');
    const [flooring_price, set_flooring_price] = React.useState('');
    const [flooring_installtion_price, set_flooring_installtion_price] = React.useState('');

    const [flooring_cost, set_flooring_cost] = React.useState(0);
    const [installtion_cost, set_installtion_cost] = React.useState(0);
    const [totalcost, set_totalcost] = React.useState(0);
    const [tax, set_tax] = React.useState(0);

    const [final_size_type, set_final_size_type] = React.useState('in square feet');




    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () =>{ 
        // set_size('')
        setIsEnabled(previousState => !previousState)

    }

    const calculate=()=>{
        var flooring;
        var installation;
        var tx;
        var total_cost;

        flooring=size*flooring_price
        installation=size*flooring_installtion_price
        total_cost=flooring+installation
        tx=total_cost*0.13

        set_flooring_cost(flooring)
        set_installtion_cost(installation)
        set_totalcost(total_cost)
        set_tax(tx)
    }
  return (
    <View style={styles.container}>
        <View style={{flex:1,marginTop:windowHeight/10}}>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Size of room <Text style={{fontWeight:'normal',fontSize:16}}>({isEnabled==true?'in square feet':'in square meter'})</Text></Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput
                            onChangeText={n =>set_size(n)}
                            // value={name}
                            // onFocus={value => this.seterror(value)}
                            keyboardType='number-pad'
                            style={{ fontSize: 14, color: 'black',borderBottomWidth:0.5,width:windowWidth-100, }}
                            placeholder={'Enter Size'}
                            placeholderTextColor='black'
                            value={size}
                        />
                        <View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#236b99" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            // onChange={(a)=>console.log(a.currentTarget.viewConfig.NativeProps.enabled)}
                        />
                        </View>
                    </View>
                </View>
                <View style={{marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Price per unit of flooring</Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput
                            onChangeText={n =>set_flooring_price(n)}
                            // value={name}
                            // onFocus={value => this.seterror(value)}
                            keyboardType='number-pad'
                            style={{ fontSize: 14, color: 'black',borderBottomWidth:0.5,width:windowWidth-100,marginTop:5 }}
                            placeholder={'Enter Price'}
                            placeholderTextColor='black'
                            value={flooring_price}
                        />
                    </View>
                </View>
                <View style={{marginLeft:20,marginTop:20}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>Price per unit of flooring installation</Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput
                            onChangeText={n =>set_flooring_installtion_price(n)}
                            // value={name}
                            // onFocus={value => this.seterror(value)}
                            keyboardType='number-pad'
                            style={{ fontSize: 14, color: 'black',borderBottomWidth:0.5,width:windowWidth-100,marginTop:5 }}
                            placeholder={'Enter Price'}
                            placeholderTextColor='black'
                            value={flooring_installtion_price}
                        />
                    </View>
                </View>
                <View style={{alignItems:'center',marginTop:30}}>
                    <TouchableOpacity onPress={()=>{calculate(),set_final_size_type(isEnabled==true?'in square feet':'in square meter')}} style={{width:150,height:40,backgroundColor:'#236b99',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white'}}>Calculate</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:20,marginTop:10}}>
                    <View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>
                        <Text style={{fontSize:18,fontWeight:'bold',maxWidth:windowWidth/1.3}}>Calculated cost in </Text>
                        <Text style={{fontSize:16,maxWidth:windowWidth/1.5}}>({final_size_type})</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5,alignSelf:'flex-start'}}>1- </Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.3}}>installation cost before tax</Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5}}> = {installtion_cost.toFixed(2)}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5,alignSelf:'flex-start'}}>2- </Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.3}}>flooring cost before tax</Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5}}> = {flooring_cost.toFixed(2)}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5,alignSelf:'flex-start'}}>3- </Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.3}}>total cost (installation + flooring) before tax</Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5}}> = {totalcost.toFixed(2)}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5,alignSelf:'flex-start'}}>4- </Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.3}}>tax</Text>
                        <Text style={{fontSize:16,fontWeight:'bold',maxWidth:windowWidth/1.5}}> = {tax.toFixed(2)}</Text>
                    </View>

                </View>
                
        </View> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
