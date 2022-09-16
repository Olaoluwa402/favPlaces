import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './screens/LoginScreen'
import AllPlacesScreen from './screens/AllPlacesScreen'
import RegisterScreen from './screens/RegisterScreen'
import PlacesDetail from './screens/PlacesDetail'
import AddPlace from './screens/AddPlace'
import {Colors} from './constants/style'
import {GlobalStyle} from './constants/style'

const Navigation = () => {
    const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerStyle:{backgroundColor:GlobalStyle.Colors.primary100},
        headerTintColor:GlobalStyle.Colors.accent100,
        contentStyle:{backgroundColor:GlobalStyle.Colors.accent100}
      }}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='AllPlaces' component={AllPlacesScreen}/>
        <Stack.Screen name='PlacesDetail' component={PlacesDetail}/>
        <Stack.Screen name='AddPlace' component={AddPlace}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})