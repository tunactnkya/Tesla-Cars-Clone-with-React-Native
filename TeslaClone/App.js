import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, View, } from "react-native";
import CarsList from "./Components/CarsList";
import Header from "./Components/header";

function App() {
  return (
    <View style={styles.container} >
    <Header  />
      <CarsList />


      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

})


export default App;