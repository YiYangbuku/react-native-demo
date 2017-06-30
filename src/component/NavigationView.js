import React from "react";
import { Button } from "react-native";

const NavigationView = (props) => (
  <div>
    <Button
      onPress={() => props.navigation.navigate(this.props.nextView)}
      title={`go to ${props.nextView}`}
    />
    {props.children}
  </div>
);

export default NavigationView;