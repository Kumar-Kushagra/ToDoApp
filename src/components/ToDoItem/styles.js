import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "95%",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
    opacity : 0.9
  },
  firstContainer : {
    width : "78%",
    left : 15,
    flexDirection : 'column'
  },
  secondContainer : {
    width : "22%",
    flexDirection : "row",
    justifyContent : "space-around",
    height : 30,
    alignItems : "center"
  },
  colorView: {
    height: 20,
    width: 20,
    borderRadius: 1000,
    marginLeft: 20,
    overflow: "hidden",
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  text2: {
    color: "#ffffff",
    fontSize: 10,
  },
  image: {
    width: 19,
    height: 19,
    tintColor: "white",
    resizeMode : "contain"
  },
});
