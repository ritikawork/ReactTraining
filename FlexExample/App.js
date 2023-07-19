import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flexDirection: "column", flex: 9, gap: 10 }}>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View style={{ backgroundColor: "red", flex: 1 }}></View>
        <View style={{ backgroundColor: "blue", flex: 1 }}></View>
      </View>

      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View style={{ backgroundColor: "orange", flex: 1 }}></View>
        <View style={{ backgroundColor: "black", flex: 1 }}></View>
      </View>

      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View style={{ backgroundColor: "gray", flex: 1 }}></View>
        <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View style={{ backgroundColor: "red", flex: 1 }}></View>
        <View style={{ backgroundColor: "blue", flex: 1 }}></View>
      </View>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View style={{ backgroundColor: "orange", flex: 1 }}></View>
        <View style={{ backgroundColor: "black", flex: 1 }}></View>
      </View>
    </View>
    // <View style={styles.container}>
    //   {/* <Text style={[styles.content, { alignSelf: "flex-start" }]}>Column1</Text>
    //   <Text style={[styles.content, { alignSelf: "flex-end" }]}>Column2</Text>
    //   <Text style={[styles.content, { alignSelf: "center" }]}>Column3</Text> */}

    //   <View style={[styles.innerContainer1]}>
    //     <Text>Container1</Text>
    //   </View>
    //   <View style={[styles.innerContainer2]}>
    //     <Text>Container2</Text>
    //   </View>
    //   <View style={[styles.innerContainer3]}>
    //     <Text>Container3</Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 200,
    flex: 6,
    gap: 10,
    //height: 50,
    //paddingVertical: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-between",
    //padding: 20,
    //flexWrap: "wrap",
    //margin: 20,
    borderWidth: 1,
    borderColor: "red",
  },
  innerContainer1: {
    //margin: 20,
    flex: 1,
    backgroundColor: "red",
    //alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  innerContainer2: {
    flex: 1,
    backgroundColor: "blue",
    //alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  innerContainer3: {
    flex: 1,
    backgroundColor: "yellow",
    //alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  content: {
    padding: 20,
    margin: 0,
    backgroundColor: "#ef4c",
    // width: 125,
    //height: 125,
    borderWidth: 1,
    borderColor: "red",
    textAlign: "center",
  },
});
