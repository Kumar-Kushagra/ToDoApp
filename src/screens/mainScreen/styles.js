import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#36334C",
    flex: 1,
    alignItems: "center",
    top: Platform.OS == "android" ? 10 : 0,
  },
  title: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: 40,
  },
  textInput: {
    height: 45,
    width: "90%",
    backgroundColor: "#ffffff",
    marginTop: 40,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  buttonView: {
    height: 45,
    width: 150,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcyan",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  spacing: {
    height: 30,
  },
});
