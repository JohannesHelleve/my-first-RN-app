import { StyleSheet, ImageStyle, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

type Styles = {
  btnContainer: ViewStyle;
}

const btnImg = (dimension: string): ImageStyle => ({
  width: dimension as any,
  height: dimension as any,
  borderRadius: SIZES.small / 1.25,
});

const styles: Styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles, btnImg };

