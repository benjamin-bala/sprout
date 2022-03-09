import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {inputStyle} from './style';

export default function Input(props) {
  const [textState, setTextState] = useState({
    left: 15,
    top: 15,
  });

  const moveText = () => {
    setTextState({
      left: 15,
      top: -10,
    });
  };
  return (
    <TouchableOpacity
      onPress={moveText}
      key={props.name}
      style={inputStyle.inputContainer}>
      <Text style={[inputStyle.inputLabel, textState]}>{props.name}</Text>
      <TextInput
        style={[inputStyle.inputBox]}
        placeholder={props.placeholder}
        onPressIn={moveText}
        onChangeText={() => {
          if (props.name === 'Name') {
            props.setNameValue();
          } else {
            props.setEmailValue();
          }
        }}
        onBlur={() => {
          if (props.name === 'Name') {
            props.checkName();
          } else {
            props.checkEmail();
          }
        }}
        value={props.name === 'Name' ? props.userNamevalue : props.emailvalue}
      />
    </TouchableOpacity>
  );
}
