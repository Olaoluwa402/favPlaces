import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../components/Login/Login'
import loginBg from '../assets/images/bg.jpg'

const LoginScreen = () => {
  return (
    <View style={styles.container}> 
      <ImageBackground style={styles.bg} source={loginBg} resizeMode='cover'>
        <Login />
      </ImageBackground>
    </View>
  ) 
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bg:{
    width:'100%',
    height:'100%'
  }
})