import styled from "styled-components";

export const ConvoCard = styled.TouchableOpacity`
  width: 100%;
`;

export const ImageBox = styled.View`
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const TextBox = styled.View`
  width: 300px;
  border-bottom-width: 1px;
  padding: 15px;
  padding-left: 0;
  margin-left: 10px;
  justify-content: center;
  flex-direction: column;
  border-bottom-color: #d1d1d1;
`;

export const UsernameBox = styled.View`
  margin-bottom: 5px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ChatInfo = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const ChatAvatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-family: "Lato-Regular";
  font-size: 15px;
`;

export const UserMessage = styled.Text`
  color: #2b2b2b;
  font-size: 15px;
`;
