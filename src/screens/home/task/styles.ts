import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,

    backgroundColor: "#262626",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#333333",

    marginBottom: 8,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
  },
  text: {
    fontSize: 14,
    color: "#F2F2F2",
    lineHeight: 14 * 1.4,
    flex: 1,
    paddingBlock: 12,
  },
  lineThrough: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
  button: {
    width: 32,
    height: 32,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#808080",
  },
});
