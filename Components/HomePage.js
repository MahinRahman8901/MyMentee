import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TextingPage from "./TextingPage";
import SettingsPage from "./SettingsPage";
import {
  ImageBackground,
  Button,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import { Container, CustomText } from "./styles";

function HomePage() {
  const Tab = createBottomTabNavigator();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Swiper>
        <Container>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={{ width: 1300, height: 1200, transform: [{ scale: 0.3 }] }}
          />
        </Container>
        <Container>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={{ width: 1300, height: 1200, transform: [{ scale: 0.3 }] }}
          />
        </Container>
        <Container>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={{ width: 1300, height: 1200, transform: [{ scale: 0.3 }] }}
          />
        </Container>
      </Swiper>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttondisplay}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttondisplay}>
          <Text style>Reject</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 100,
  },

  buttondisplay: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    marginLeft: 30,
  },
});
export default HomePage;
