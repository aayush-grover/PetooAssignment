import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  FlatList,
  Alert,
} from "react-native";

function Menu(props) {
  console.log(props.menu.length);
  return (
    <View style={styles.menucontainer}>
      <ImageBackground
        fadeDuration={1000}
        resizeMode="stretch"
        style={styles.menu}
        // onLoad={alert("Hello everyone")}
        source={require("../assets/menubg.jpg")}
      >
        <View style={styles.setMenu}>
          <Image
            style={styles.logo}
            fadeDuration={3000}
            resizeMode="contain"
            source={require("../assets/petoo-footer-logo.png")}
            tintColor="#ff9f00"
          />
          <Text style={styles.menuText}>Menu</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.sub}>
            <ScrollView>
              {props.menu.map((items) => {
                return (
                  <View style={styles.details}>
                    <Text style={styles.name}>
                      {items.is_veg == "1" ? (
                        <Text
                          // key={items.item_id}
                          style={{
                            borderWidth: 2,
                            padding: 1,
                            paddingLeft: 6,
                            color: "green",
                            borderColor: "green",
                          }}
                        >
                          {"\u2B24"}
                        </Text>
                      ) : (
                        <Text
                          // key={items.item_id}
                          style={{
                            borderWidth: 2,
                            padding: 1,
                            paddingLeft: 6,
                            color: "brown",
                            borderColor: "brown",
                          }}
                        >
                          {"\u2B24"}
                        </Text>
                      )}
                      <Text
                        onPress={() => {
                          Alert.alert(items.item_name, items.description, [
                            {
                              text: "Order Now!!",
                              onPress: () => console.log("Yes"),
                            },
                            { text: "Later", onPress: () => console.log("No") },
                          ]);
                        }}
                      >
                        {items.item_name}
                      </Text>
                    </Text>
                    <Text style={styles.price}>Rs. {items.price}</Text>
                  </View>
                );
              })}
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
    marginTop: 30,
    marginBottom: 354,
  },
  sub: {
    alignItems: "center",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  name: {
    fontWeight: "700",
    color: "black",
  },
  price: {
    fontWeight: "700",
  },
  logo: {
    marginTop: 20,
    width: "50%",
  },
  menuText: {
    fontSize: 40,
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  setMenu: {
    alignItems: "center",
  },
});
export default Menu;
