import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  const users = [
    {
      id: 1,
      name: 'Taro',
      latitude: 35.6895,
      longitude: 139.6917,
      icon: require('../../assets/images/favicon.png'), // ← assetsに好きな画像を入れて使ってね
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.6895,
          longitude: 139.6917,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
      >
        {users.map(user => (
          <Marker
            key={user.id}
            coordinate={{ latitude: user.latitude, longitude: user.longitude }}
            title={user.name}
          >
            <Image source={user.icon} style={styles.icon} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
