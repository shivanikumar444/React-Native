import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class Signin extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to iConnect, Your using {this.props.env} Environement</Text>
      </View>
  );
}
}

const styles = {
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 16
  }
}
