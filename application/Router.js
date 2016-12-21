import React, {Component} from 'react';
import{
  StyleSheet,
  Navigator
} from 'react-native';

import Environment from './dist/environment';
import Signin from './src/timetracker/components/signin';

ROUTES = {
  signin: Signin
}
export default class Router extends Component{
  constructor(){
    super();
    this.env = new Environment().getEnvironment();
  }
  renderScene(route, navigator){
      let Component = ROUTES[route.name];
      return <Component env = {this.env} />;
  }
  render(){
    return(
      <Navigator
        style = {styles.container}
        initialRoute = {{name:'signin'}}
        renderScene = {this.renderScene.bind(this)}
        configureScene = {() => {return Navigator.SceneConfigs.FloatFromRight;}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
