import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
} from "react-native";

function Menu(props) {
  return (
    <View style={styles.menucontainer}>
      <ImageBackground
        fadeDuration={1000}
        resizeMode="stretch"
        style={styles.menu}
        // onLoad={alert("Hello everyone")}
        source={require("../assets/menubg.jpg")}
      >
        <View style={styles.main}>
          <View style={styles.sub}>
            <ScrollView>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>|</Text>
              <Text style={styles.menuShade}>V</Text>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  menucontainer: {
    position: "absolute",
    margin: 20,
    height: "90%",
    width: "90%",
  },
  menu: {
    height: "100%",
    width: "100%",
  },
  main: {
    marginTop: 25,
    marginBottom: 30,
  },
  sub: {
    alignItems: "center",
  },
});
export default Menu;
