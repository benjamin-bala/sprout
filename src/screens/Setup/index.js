import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {setupStyle} from './style';

export default function Setup({navigation}) {
  return (
    <View style={setupStyle.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
        <View style={setupStyle.setupHeader}>
          <View style={setupStyle.setupHeader__btn}>
            <Text style={setupStyle.setupHeader__btn_text}>{'<'}</Text>
          </View>
          <Text style={setupStyle.setupHeader__text}>Your Profile</Text>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <ScrollView style={setupStyle.scrollContainer}>
          <View style={setupStyle.scrollItem}>
            <View style={setupStyle.thumbnailBox}>
              <Text style={setupStyle.thumbnail}>S</Text>
            </View>
            <View style={setupStyle.cardBox}>
              <Text style={setupStyle.cardBox__title}>Sprout Digital</Text>
              <Text style={setupStyle.cardBox__text}>
                info@sproutdigital.xyz
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
