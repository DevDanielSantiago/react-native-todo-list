import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 208,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderTopColor: "#333333",
  },
  clipboard: {
    width: 56,
    height: 56,
  },
  text: {
    fontSize: 14,
    color: "#808080",
    fontWeight: 400,
    lineHeight: 19.6,
  },
  textHighlight: {
    fontWeight: 700,
    lineHeight: 19.6,
  },
});
