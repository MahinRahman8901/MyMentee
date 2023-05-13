import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useState, useCallback, useEffect } from "react";
import {
  createNativeStackNavigator,
  NativeStackView,
} from "@react-navigation/native-stack";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
  ConvoCard,
  ChatInfo,
  ImageBox,
  ChatAvatar,
  TextBox,
  UsernameBox,
  UserName,
  UserMessage,
} from "../Components/PageStyles.js";
import { useNavigation } from "@react-navigation/native";

const convos = [
  {
    id: "1",
    name: "Daniel",
    text: "Hi how are you?",
    time: "",
    avatar: "https://i.pravatar.cc/150?img=69",
  },
  {
    id: "2",
    name: "Lucy",
    text: "Hi how are you?",
    time: "",
    avatar: "https://i.pravatar.cc/150?img=64",
  },
  {
    id: "3",
    name: "Emma",
    text: "Hi how are you?",
    time: "",
    avatar: "https://i.pravatar.cc/150?img=50",
  },
  {
    id: "4",
    name: "Ben",
    text: "Hi how are you?",
    time: "",
    avatar: "https://i.pravatar.cc/150?img=61",
  },
];
export default function ConversationPage() {
  const nav = useNavigation();

  const loadChat = ({ item }) => {
    return (
      <ConvoCard
        onPress={() =>
          nav.navigate("TextingPage", { name: item.name, avatar: item.avatar })
        }
      >
        <ChatInfo>
          <ImageBox>
            <ChatAvatar source={{ uri: item.avatar }} />
          </ImageBox>
          <TextBox>
            <UsernameBox>
              <UserName>{item.name}</UserName>
            </UsernameBox>
            <UserMessage>{item.text}</UserMessage>
          </TextBox>
        </ChatInfo>
      </ConvoCard>
    );
  };

  return (
    <>
      <FlatList
        data={convos}
        renderItem={loadChat}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}
