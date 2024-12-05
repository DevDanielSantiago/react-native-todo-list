import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    marginBottom: 20,
  },
  infoData: {
    flexDirection: "row",
    gap: 8,
  },
  createdTitle: {
    fontWeight: 700,
    fontSize: 14,
    color: "#4EA8DE",
  },
  concludedTitle: {
    fontWeight: 700,
    fontSize: 14,
    color: "#8284FA",
  },
  quantity: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: 700,
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: "#333333",
    textAlign: "center",
    lineHeight: 20,
  },
});
