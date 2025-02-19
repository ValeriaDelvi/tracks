//Mappa con le impostazioni di coordinate che abbiamo messo noi
//retta diagonale


import React from "react";
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
    let points = [];
    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 45.07011544277661 + i * 0.001,
            longitude: 7.694952279929889 + i * 0.001,
        });
    }

    return <MapView
        style={styles.map}
        initialRegion={{
            latitude: 45.07011544277661,
            longitude: 7.694952279929889,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }} >

        <Polyline
            coordinates={points}
            strokeWidth={4}
            strokeColor="F00"
        />
    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;