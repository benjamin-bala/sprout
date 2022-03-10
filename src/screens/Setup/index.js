import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import React, {useContext} from 'react';
import {setupStyle} from './style';
import {Authentication} from '../../UserAuth';

export default function Setup({navigation}) {
  const {user} = useContext(Authentication);

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
              <Text style={setupStyle.thumbnail}>{user?.userName[0]}</Text>
            </View>
            <View style={setupStyle.cardBox}>
              <Text style={setupStyle.cardBox__title}>{user?.userName}</Text>
              <Text style={setupStyle.cardBox__text}>{user?.email}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
