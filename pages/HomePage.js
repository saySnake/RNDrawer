import React from 'react';
import {Button, View,StyleSheet,Text} from 'react-native';

export default class HomePage extends React.Component {
    //在这里定义页面的导航属性
    static  navigationOptions= {
       title:'Home',
        headerBackTitle:'返回标题',//安卓不支持，长度限制
    };
    render() {
        const {navigation} =this.props;
        return (<View style={{flex: 1, backgroundColor: 'blue', paddingTop: 30}}>
            <Text style={styles.text}>欢迎来到Homepage</Text>
            <Button title={'顶部导航'} onPress={()=>{
                navigation.navigate('MaterialTopTabNavigator')
            }}/>
                <Button title={'底部导航'} onPress={()=>{
                    navigation.navigate('BottomTabNavigator')
                }}/>
                <Button title={'切换导航器'} onPress={()=>{
                    navigation.navigate('SwitchNav')
                }}/>
                <Button title={'抽屉导航器'} onPress={()=>{
                    navigation.navigate('DrawerNav')
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
