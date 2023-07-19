import { Button, StyleSheet, Text, View } from "react-native";
import Home from "../Screens/Home";
import { useState } from "react";

export default function State() {
  const [first, setFirst] = useState("IX");
  const update = ()=>{
    setFirst("X")
  }
  return (
    <View>
      
      <Text>
        <Home name="Joyin" class={first} />
      </Text>
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Click to Update" onPress={update} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
