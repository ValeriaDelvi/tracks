import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {

    const {
        state: { currentLocation, locations }
    } = useContext(LocationContext);
    //console.log(currentLocation);
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    initialLocation = {
        longitude: 7.694952279929889,
        latitude: 45.07011544277661

    };

    return <MapView
        style={styles.map}
        initialRegion={{
            ...initialLocation,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        region={{
            ...initialLocation,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }} >
        <Circle
            center={currentLocation.coords}
            radius={120}
            strokeColor="rgba(150,258,255,1.0)"
            fillColor="rgba(150,258,255,0.3)" />
        <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
}; 

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;

