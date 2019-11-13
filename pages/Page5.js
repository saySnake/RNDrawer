import React from 'react';
import {Button, View,StyleSheet,Text} from 'react-native';
import {DrawerActions} from 'react-navigation-drawer';

export default class Page5 extends React.Component {
    render() {
        const {navigation} =this.props;
        return (<View style={{flex: 1, backgroundColor: 'red', paddingTop: 30}}>
                <Text style={styles.text}>欢迎来到Page5</Text>
                <Button title={'open Drawer'} onPress={()=>{
                    navigation.openDrawer()
                }}/>

                <Button title={'Toggle Drawer'} onPress={()=>{
                    navigation.toggleDrawer()
                }}/>

                <Button title={'Open page4'} onPress={()=>{
                    navigation.navigate('Page4')
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
