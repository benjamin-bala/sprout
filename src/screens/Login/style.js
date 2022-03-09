import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 35,
    backgroundColor: colors.white,
  },
  headerContainer: {
    marginVertical: 15,
  },
  headerText: {
    color: colors.pink,
    fontSize: fonts.size.font30,
    fontWeight: fonts.weight.bold,
    textAlign: 'center',
    marginVertical: 10,
  },
  err: {
    color: colors.red,
    fontWeight: fonts.weight.semi,
    fontSize: fonts.size.font10,
    marginVertical: 5,
  },
  inputBoxContainer: {
    marginVertical: 20,
  },
  btn: {
    backgroundColor: colors.pink,
    paddingVertical: 15,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: 2,
    shadowColor: colors.black,
    elevation: 2,
    shadowOpacity: 15,
  },
  btnImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  btnText: {
    fontSize: fonts.size.font16,
    color: colors.white,
    fontWeight: fonts.weight.semi,
  },
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
