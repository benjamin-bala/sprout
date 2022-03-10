import {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Logo from '../../components/Logo';
import padlock from '../../assets/images/padlock.png';
import {loginStyle} from './style';
import {Authentication} from '../../UserAuth';

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userNameErr, setUserNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [textState, setTextState] = useState({
    left: 15,
    top: 15,
  });

  const {setUser} = useContext(Authentication);

  let padlockUri = Image.resolveAssetSource(padlock).uri;

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const loginUser = () => {
    if (!userName) {
      setUserNameErr('Name is required!');
      return;
    }
    if (!email) {
      setEmailErr('Email is required!');
      return;
    }
    if (!reg.test(email.toLowerCase())) {
      setEmailErr('Invalid Email!');
      return;
    }

    setUser({
      userName,
      email,
    });

    navigation.navigate('setup');
  };

  const moveText = () => {
    setTextState({
      left: 15,
      top: -10,
    });
  };

  return (
    <View style={loginStyle.container}>
      <Logo width={120} height={120} />
      <View style={loginStyle.headerContainer}>
        <Text style={loginStyle.headerText}>Set Up Profile</Text>
      </View>
      <View>
        <View style={loginStyle.inputBoxContainer}>
          <TouchableOpacity
            onPress={moveText}
            style={loginStyle.inputContainer}>
            <Text style={[loginStyle.inputLabel, textState]}>Name</Text>
            <TextInput
              style={[loginStyle.inputBox]}
              onPressIn={moveText}
              onChangeText={value => {
                setUserNameErr('');
                setUserName(value);
              }}
              value={userName}
            />
          </TouchableOpacity>
          <Text style={loginStyle.err}>{userNameErr}</Text>
        </View>
        <View style={loginStyle.inputBoxContainer}>
          <TouchableOpacity
            onPress={moveText}
            style={loginStyle.inputContainer}>
            <Text style={[loginStyle.inputLabel, textState]}>Email</Text>
            <TextInput
              style={[loginStyle.inputBox]}
              onPressIn={moveText}
              onChangeText={value => {
                setUserNameErr('');
                setEmail(value);
              }}
              value={email}
              keyboardType="email-address"
            />
          </TouchableOpacity>
          <Text style={loginStyle.err}>{emailErr}</Text>
        </View>
      </View>
      <View>
        <TouchableHighlight onPress={() => loginUser()}>
          <View style={loginStyle.btn}>
            <Image style={loginStyle.btnImage} source={{uri: padlockUri}} />
            <Text style={loginStyle.btnText}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
