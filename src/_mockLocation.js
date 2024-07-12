import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 7.694952279929889 + increment * tenMetersWithDegrees, // add your current longitude torino centro
      latitude: 45.07011544277661 + increment * tenMetersWithDegrees,  // add your current lattitude
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);