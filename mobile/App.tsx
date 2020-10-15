import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'; // Dimensions retorna a dimensão da tela
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps' // Importando mapa

import { Feather } from '@expo/vector-icons'
import mapMarker from './src/images/map-marker.png'

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -22.501896,
          longitude: -48.5567987,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} >

        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 1.1,
          }}
          coordinate={{
            latitude: -22.501896,
            longitude: -48.5567987,
          }}
        >
          <Callout tooltip={true} onPress={() => { }}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Meninas</Text>
            </View>
            <Text></Text>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}> 2 Orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }}>
          <Feather name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center'
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,

  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3
  },
  footerText: {
    color: '#8fa7b3',
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 17,

    justifyContent: 'center',
    alignItems: 'center'

  },
});