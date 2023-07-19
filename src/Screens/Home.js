import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View style={{backgroundColor:'gray', padding:20, gap:5, borderRadius:10}}>
      <Text>Bio Data</Text>
      <Text>Name : {props.name}</Text>
      <Text>Class : {props.class}</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
 
})