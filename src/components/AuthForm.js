import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text style={{fontSize:25}}>{headerText}</Text>
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
            {errorMessage ? (
                <Text style={styles.error}>{errorMessage}</Text>
                ) : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    error:{
        marginLeft:15,
        fontSize:16,
        color: 'red'
    },

});

export default AuthForm;