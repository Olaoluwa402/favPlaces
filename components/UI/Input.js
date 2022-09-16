import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../constants/style'

const Input = ({inputProperties, style}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput {...inputProperties} style={styles.input}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{},
  input:{
    marginVertical:8,
    paddingHorizontal:8,
    paddingVertical:8,
    backgroundColor:GlobalStyle.Colors.primary100,
    color:GlobalStyle.Colors.accent100,
    borderBottomWidth:2,
    borderBottomColor:GlobalStyle.Colors.secondary100
  }
})