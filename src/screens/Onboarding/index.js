import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import backgroundImage from '../../assets/images/background.png';
import {onboardingStyle} from './style';
import Logo from '../../components/Logo';

export default function Onboarding({navigation}) {
  let backgroundUri = Image.resolveAssetSource(backgroundImage).uri;
  return (
    <View style={onboardingStyle.container}>
      <ImageBackground
        style={onboardingStyle.imageContainer}
        source={{uri: backgroundUri}}
        resizeMode="cover">
        <Logo width={200} height={200} />
        <View style={onboardingStyle}>
          <View style={onboardingStyle.textContainer}>
            <Text style={onboardingStyle.text}>Welcome</Text>
          </View>
          <View style={onboardingStyle.btn_container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('login');
              }}
              style={[onboardingStyle.btn, onboardingStyle.btn_white]}>
              <Text style={onboardingStyle.text_pink}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={[onboardingStyle.btn, onboardingStyle.btn_pink]}>
              <Text style={onboardingStyle.text_white}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
