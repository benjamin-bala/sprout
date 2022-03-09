import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import logo from '../../assets/images/logo.png';

export default function Logo(props) {
  let logoUri = Image.resolveAssetSource(logo).uri;

  const imageStyle = StyleSheet.create({
    image: {
      width: props.width || 0,
      height: props.height || 0,
    },
    imageContainer: {
      alignItems: 'center',
    },
  });

  return (
    <View style={imageStyle.imageContainer}>
      <Image
        source={{
          uri: logoUri,
        }}
        style={imageStyle.image}
      />
    </View>
  );
}
