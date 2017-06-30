import React, { Component } from "react";
import { AppRegistry, ScrollView, Image, Text, Button } from "react-native";
import ReactImg from "../../source/img/favicon.png";

class MyScrollView extends Component {
  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => this.props.navigation.navigate("Hello")}
          title="to Hello"
        />
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Image source={ReactImg}/>
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    )
  }
}

export default MyScrollView;