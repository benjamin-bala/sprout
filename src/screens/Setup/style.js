import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import fonts from '../../utils/fonts';

export const setupStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    paddingVertical: 20,
    backgroundColor: colors.white,
  },
  setupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  setupHeader__btn: {
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 40,
    aspectRatio: 1 / 1,
  },
  setupHeader__btn_text: {
    fontSize: fonts.size.font20,
    color: colors.white,
    fontWeight: fonts.weight.semi,
  },
  setupHeader__text: {
    fontSize: fonts.size.font30,
    marginLeft: 10,
    color: colors.pink,
    fontWeight: fonts.weight.bold,
  },
  scrollContainer: {
    marginTop: 40,
  },
  scrollItem: {
    flexDirection: 'row',
  },
  thumbnailBox: {
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 40,
    aspectRatio: 1 / 1,
  },
  thumbnail: {
    fontSize: fonts.size.font20,
    color: colors.white,
    fontWeight: fonts.weight.semi,
  },
  cardBox: {
    marginLeft: 10,
  },
  cardBox__title: {
    fontSize: fonts.size.font20,
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
  cardBox__text: {
    fontSize: fonts.size.font12,
  },
});
