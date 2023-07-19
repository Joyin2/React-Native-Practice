import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from "expo-status-bar";

import React from 'react'
import State from "./src/Components/State"

const App = () => {
  return (
    <View>
      <StatusBar style="dark" translucent={false} backgroundColor="white" />
      <State/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})