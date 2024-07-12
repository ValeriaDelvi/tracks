import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {

  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  //console.log(state);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign Up For Traker dajee"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up <3"
        onSubmit={signup}
      />

      <NavLink
        text="Hai già un account? e allora ti porto al Login ^_^"
        routeName="Signin"
      />


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
    marginBottom: 100,
    //borderColor:'red',
    //borderWidth:10,
    flex: 1,
    justifyContent: 'center'
  }
});

export default SignupScreen;