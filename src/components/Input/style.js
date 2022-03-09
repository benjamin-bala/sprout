import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

export const inputStyle = StyleSheet.create({
  inputContainer: {},
  inputBox: {
    borderColor: colors.pink,
    borderRadius: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  inputLabel: {
    backgroundColor: colors.white,
    width: 40,
    color: '#333',
    position: 'absolute',
    left: 15,
    top: -10,
    zIndex: 2,
  },
});
