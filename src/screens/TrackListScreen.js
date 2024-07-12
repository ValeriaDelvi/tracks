import React, { useContext } from 'react';
import { TouchableOpacity, FlatList, StyleSheet, Text, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import { List } from 'react-native-paper';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    console.log(state);
    return <>
        <NavigationEvents onWillFocus={fetchTracks} />
        <Text style={{ fontSize: 48 }}>TrackListScreen Screen</Text>
        <FlatList
            data={state}
            keyExtractor={(item) => { item._id }}
            renderItem={({ item }) => {
                return (
                <TouchableOpacity onPress={() => { navigation.navigate('TrackDetail',{_id: item._id}) }}>
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </TouchableOpacity>
                );
            }}
        />
    </>
};

TrackListScreen.navigationOptions = {
    title: 'Tracce'
}

const styles = StyleSheet.create({});

export default TrackListScreen;