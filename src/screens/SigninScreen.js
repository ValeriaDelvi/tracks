import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
//navEvent per cancellare mex d'errore tra una chermata e l'altra
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = ()=>{
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    //console.log(state);
    
    return (
      <View style={styles.container}>
        <NavigationEvents
        onWillFocus={clearErrorMessage}
        />
        <AuthForm
        headerText="Sign In For Traker yee"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In :)"
        onSubmit={signin}
        />
  
        <NavLink
        text="Non hai un account? Oh My Amour andiamo a registrarci! <3"
        routeName="Signup"
        />
      </View>
    );
  };
 
  SigninScreen.navigationOptions = () => {
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
export default SigninScreen;