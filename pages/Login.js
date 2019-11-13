import React from 'react';
import {Button, View,StyleSheet,Text} from 'react-native';

export default class Page1 extends React.Component {
    render() {
        const {navigation} =this.props;
        return (<View style={{flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
            <Text style={styles.text}>欢迎来到Page1</Text>
            <Button title={'登录'} onPress={()=>{
                navigation.navigate('App');
            }}/>
        </View>
        )
    }
}

const styles= StyleSheet.create({
   text:{
       fontSize:20,
       color:'white'
   }
});
