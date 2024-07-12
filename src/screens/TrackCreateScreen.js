import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording },
        addLocation
    } = useContext(LocationContext);
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording]
    );

    const [err] = useLocation(isFocused || recording, callback);

    console.log(isFocused);

    return (
        <SafeAreaView >
            <Text style={{ fontSize: 35 }}> Crea il tuo percorso</Text>
            <Map />
            {err ? <Text>Abilita la localizzazione o nada.</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
  };



const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);