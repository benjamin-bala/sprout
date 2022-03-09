import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';
// import {size, weight} from '../../utils/fonts';

export const onboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: fonts.size.font30,
    fontWeight: fonts.weight.semi,
    color: colors.pink,
  },
  textContainer: {
    marginVertical: 45,
  },
  btn: {
    backgroundColor: 'white',
    paddingVertical: 18,
    borderRadius: 25,
    marginVertical: 15,
  },
  btn_pink: {
    backgroundColor: colors.pink,
  },
  btn_white: {
    backgroundColor: colors.white,
  },
  text_pink: {
    color: colors.pink,
    textAlign: 'center',
    fontSize: fonts.size.font20,
    fontWeight: fonts.weight.bold,
  },
  text_white: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fonts.size.font20,
    fontWeight: fonts.weight.bold,
  },
});
