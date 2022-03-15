import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: windowHeight / 10, marginHorizontal: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
          Profile
        </Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Name</Text>
          <Text style={{ fontSize: 14 }}>Mohamed Aljahani</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Email</Text>
          <Text style={{ fontSize: 14 }}>Mohamed.Aljahani@georgebrown.ca</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Department</Text>
          <Text style={{ fontSize: 14 }}>Software Engineering</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Semester</Text>
          <Text style={{ fontSize: 14 }}>Fifth</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Student id</Text>
          <Text style={{ fontSize: 14 }}>101197058</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
