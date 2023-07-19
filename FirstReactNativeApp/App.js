import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi React!</Text>
      <Text style={styles.text}>Hi React1!</Text>
      <TouchableHighlight>
        <Text>touch</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    margin: 12,
  },
  text: {
    color: "red",
    backgroundColor: "black",
    padding: 8,
    margin: 12,
    borderWidth: 1,
    borderColor: "yellow",
  },
});
