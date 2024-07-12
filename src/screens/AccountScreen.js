import React, { useContext } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { FontAwesome } from '@expo/vector-icons';



const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 35 }}>Account Screen</Text>
            <Spacer>
                <Button title='Sign Out' onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
  };

const styles = StyleSheet.create({});

export default AccountScreen;