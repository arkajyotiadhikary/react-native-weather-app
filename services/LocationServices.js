import Geolocation from "@react-native-community/geolocation";

export const requestLocationPermission = async () => {
    try {
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Access Required",
                message: "This App needs to Access your location",
            }
        );
    } catch (err) {
        console.warn(err);
    }
};

// const getOneTimeLocation = () => {
//     Geolocation.getCurrentPosition(
//         (position) => {
//             console.log(position);

//             const currentLongitude = JSON.stringify(position.coords.longitude);
//             const currentLatitude = JSON.stringify(position.coords.latitude);

//             return {
//                 longitude: currentLongitude,
//                 latitude: currentLatitude,
//                 locationStatus: "you are here",
//             };
//         },
//         (error) => {
//             setLocationStatus(error.message);
//         },
//         {
//             enableHighAccuracy: false,
//             timeout: 30000,
//             maximumAge: 1000,
//         }
//     );
// };

// const subscribeLocationLocation = () => {
//     watchID = Geolocation.watchPosition(
//         (position) => {
//             console.log(position);

//             const currentLongitude = JSON.stringify(position.coords.longitude);
//             const currentLatitude = JSON.stringify(position.coords.latitude);

//             return {
//                 longitude: currentLongitude,
//                 latitude: currentLatitude,
//                 locationStatus: "you are here",
//             };
//         },
//         (error) => {
//             return {
//                 longitude: null,
//                 latitude: null,
//                 locationStatus: error.message,
//             };
//         },
//         {
//             enableHighAccuracy: false,
//             maximumAge: 1000,
//         }
//     );
// };
