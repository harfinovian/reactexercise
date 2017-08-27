/**
 * Created by harfi on 26/08/2017.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button, Text, TextInput, Image, View } from 'react-native';

var s = require('./Style');

export default class App extends Component {

    _onPressButton(){
        alert("Helloworld");
    }

    render() {
        return (
            <View style={s.text}>
                <Text>Username</Text>
                <TextInput placeholder="Input username ..."
                           style={{marginTop: 10,height: 30, borderColor: '#0084FF', borderWidth: 1}}
                />
                <Text style={{marginTop: 10}}>Password</Text>
                <TextInput placeholder="Input password ..."
                           style={{marginTop: 10,height: 30, borderColor: '#0084FF', borderWidth: 1}}
                />
                <Button style={{backgroundColor:"#07008C", color: "#ffffff"}}
                        title="SUBMIT !!!"
                        onPress={()=>this._onPressButton()}
                />
            </View>
        );
    }


}
