import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {

  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //console.log(state);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text>
          Sign uuuup
        </Text>
        <Text h3 > Sign uuuup for tracker</Text>
      </Spacer>
      <Input label="Email"
        value={email}
        onChangeText={(setEmail)}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button
          title="Sign Up"
          onPress={() => signup({ email, password })}
        />
      </Spacer>
      <TouchableOpacity onPress={()=>{navigation.navigate('Signin')}}>
        <Text style={styles.link}>Hai già un account? e allora ti porto al Login</Text>
      </TouchableOpacity>


    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
    //borderColor:'red',
    //borderWidth:10,
    flex: 1,
    justifyContent: 'center'
    },
    error:{
      marginLeft:15,
      fontSize:16,
      color: 'red'
  },
  link:{
    color: 'blue',
    marginLeft:15
  }
});

export default SignupScreen;