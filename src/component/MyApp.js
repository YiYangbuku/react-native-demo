import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";
import NavigationView from "./NavigationView";
import HelloView from "./HelloView";
import MyScrollView from "./MyScrollView";

const getNavigationView = (component, nextView) => (
  <NavigationView

  >
    {component}
  </NavigationView>
);

export default MyApp = StackNavigator({
  Hello: { screen: HelloView },
  Scroll: { screen: MyScrollView },
});

