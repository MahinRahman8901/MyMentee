import { Button } from "react-native-web";
import {
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Title,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-gifted-chat";

const SettingsPage = ({ navigation }) => {
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=8",
          }}
          size={100}
        />
        <View>
          <Text style={styles.title}>Username</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="email" size={18}></Icon>
            <Text style={{ marginLeft: 10, marginBottom: 20 }}>Email</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Icon name="map-marker-radius" size={18}></Icon>
            <Text style={{ marginLeft: 10 }}>Location</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("EditSettings")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },

  text: {
    textAlign: "center",
    opacity: 0.7,
    color: "black",
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    borderColor: "#1DADED",
    borderWidth: 0.7,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#1DADED",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonOutline: {
    backgroundColor: "transparent",
    marginTop: 20,
    borderColor: "#1DADED",
    borderWidth: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  buttonOutlineText: {
    color: "#1DADED",
    fontWeight: "700",
    fontSize: 15,
  },
});
