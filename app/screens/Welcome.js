import React, { PureComponent } from "react";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import Menu from "./Menu";
class Welcome extends PureComponent {
  state = {
    menu: [],
    loading: true,
    pressStatus: false,
  };
  handleMenuStyle = () => {
    this.setState({ pressStatus: true });
    console.log(this.state.pressStatus);
  };
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/bgimage3.jpg")}
      >
        <Image
          style={styles.logo}
          fadeDuration={3000}
          source={require("../assets/petoo-footer-logo.png")}
          tintColor="#ff9f00"
        />
        <Text style={styles.heading}>Hunger is Coming...</Text>
        {this.state.pressStatus ? (
          <Menu />
        ) : (
          <View style={styles.button}>
            <Button
              title="Menu"
              onPress={this.handleMenuStyle}
              color="#ff9f00"
            />
            <Text style={styles.menuShade}>|</Text>
            <Text style={styles.menuShade}>|</Text>
            <Text style={styles.menuShade}>|</Text>
            <Text style={styles.menuShade}>|</Text>
            <Text style={styles.menuShade}>V</Text>
          </View>
        )}
      </ImageBackground>
    );
  }
  async componentDidMount() {
    fetch(
      "https://jsonblob.com/api/jsonBlob/ecfad985-bc66-11ea-8cae-99a0660a95d6"
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({ menu: res });
        //console.log(this.state.menu);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  logo: {
    marginTop: 40,
  },
  heading: {
    color: "white",
    marginTop: 30,
    fontSize: 30,
  },
  button: {
    marginTop: 250,
    alignItems: "center",
  },
  menuShade: {
    color: "#ff9f00",
  },
});
export default Welcome;
