import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { GlobalStyle } from '../../constants/style'

const OutlineButton = ({icon, onPress,children, color, size}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> [styles.button, pressed && styles.pressed]} >
      <Ionicons name={icon} color={color} size={size} style={styles.icon}/>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default OutlineButton

const styles = StyleSheet.create({
    button:{
        width:'100%',
        marginVertical:8,
        paddingHorizontal:8,
        paddingVertical:4,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        borderWidth:2,
        borderColor:GlobalStyle.Colors.secondary100
    },
    pressed:{
        opacity:0.7
    },
    text:{
        color:GlobalStyle.Colors.primary100,
        fontSize:18
    }
})