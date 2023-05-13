import React from "react";

import SettingsPage from "./Components/SettingsPage";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./Components/HomePage";
import LoginScreen from "./Components/LoginScreen";
import RegisterScreenMentor from "./Components/RegisterScreenMentor";
import RegisterScreenMentee from "./Components/RegisterScreenMentee"; //sdasdsa

import ConversationPage from "./Components/ConversationPage";
import TextingPage from "./Components/TextingPage";
import EditSettingsPage from "./Components/EditSettingsPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterMentee"
          component={RegisterScreenMentee}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterMentor"
          component={RegisterScreenMentor}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={TabBottomNav}
        />
        <Stack.Screen name="TextingPage" component={TextingPage} />
        <Stack.Screen name="SettingsPage" component={SettingsPage} />
        <Stack.Screen name="EditSettings" component={EditSettingsPage} />
        {/* THE ABOVE CHANGE TO HOMEPAGE FROM SETTINGPAGE WHEN NAV IS COMPLETE */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function TabBottomNav() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        tabBarShowLabel={false}
        name="Home "
        options={{
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
        }}
        component={HomePage}
      ></Tab.Screen>
      <Tab.Screen
        name="Texting"
        options={{
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons
              name="comment-text"
              color={color}
              size={24}
            />
          ),
        }}
        component={ConversationPage}
      ></Tab.Screen>
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: (color, size) => (
            <MaterialCommunityIcons name="cog" color={color} size={24} />
          ),
        }}
        component={SettingsPage}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
