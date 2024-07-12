import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext"
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
//console.log(locations.length);

const [saveTrack] = useSaveTrack();
    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder='Enter name Track' />
            </Spacer>
            <Spacer>
            {recording
                ? <Button title="Stop registrazione" onPress={stopRecording} />
                : <Button title="Inizia a registrare" onPress={startRecording} />
            }
            </Spacer>
            <Spacer>
            {
            !recording && locations.length
            ?<Button title="Save" onPress={saveTrack} />
            :null
            }
            </Spacer>

        </>
    );
};

export default TrackForm;