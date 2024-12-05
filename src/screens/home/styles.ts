import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    height: "100%",
  },
  content: {
    paddingInline: 24,
    height: `${100 - 21.30541871921182}%`,
    paddingBottom: 30,
  },

  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 6,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    gap: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0D0D0D",
  },
  inputFocused: {
    borderColor: "#5E60CE",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -27,
    paddingInline: 24,
  },
  buttonIcon: {
    fontSize: 16,
    color: "#F2F2F2",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
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
