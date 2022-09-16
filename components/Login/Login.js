import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Input from '../UI/Input'
import OutlineButton from '../UI/OutlineButton'
import { GlobalStyle } from '../../constants/style'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
    const [state, setState] = useState({
        email:'',
        password:''
    })
    const onChangeHandler = (inputValue)=> {
        console.log(inputValue)
    }

    const loginHandler = ()=> {
      navigation.navigate('AllPlaces')
  }
  return ( 
    <View style={styles.container}>
      <View style={styles.inner}>
      <Input inputProperties={{ 
      value:state.email,
      onChangeText:onChangeHandler,
          }
      } />

      <Input inputProperties={{
      value:state.email,
      onChangeText:onChangeHandler,
      }  
      } /> 

      <OutlineButton 
        icon='log-in-outline' 
        color={GlobalStyle.Colors.primary100}
        size={30}
        onPress={loginHandler}
        >Login</OutlineButton>
      </View>
     
    </View>
  ) 
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:4,
    justifyContent:'center',
    alignItems:'center'
  },
  inner:{
    width:'90%',
    backgroundColor:GlobalStyle.Colors.accent100,
    paddingHorizontal:30,
    paddingVertical:20,
    borderRadius:20,
    opacity:0.7
  }
})