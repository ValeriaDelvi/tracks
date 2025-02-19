import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');
    //_id per sapere quale elemento l'user ha toccato

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;
    return (
        <>
            <Text style={{ fontSize: 35 }}>TrackDetailScreen Screen</Text>
            <Text style={{ fontSize: 24 }}>{track.name}</Text>
            <MapView
                initialRegion={{
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
                    >
                    <Polyline coordinates={track.locations.map(loc => loc.coords)} />
            </MapView >
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        height:300
    }
});

export default TrackDetailScreen;