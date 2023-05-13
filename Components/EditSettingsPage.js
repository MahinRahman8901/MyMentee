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

const EditSettingsPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => {}}>
            <View>
              <ImageBackground
                source={{ uri: "https://i.pravatar.cc/150?img=8" }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            Daniel
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Surname"
            style={styles.input}
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            autoCorrect={false}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Location"
            style={styles.input}
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditSettingsPage;

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
  },

  inputContainer: {
    width: "80%",
  },
  input: {
    borderColor: "#1DADED",
    borderWidth: 0.7,
    paddingHorizontal: 80,
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
