import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'; // Dimensions retorna a dimensão da tela
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps' // Importando mapa
import { Feather } from '@expo/vector-icons'
import mapMarker from '../images/map-marker.png'
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphanagesMap() {
    const navigation = useNavigation()
    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails')
    }
    function handleNavigateToCreateOrphanage() {
        navigation.navigate('SelectMapPosition')
    }

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
                    <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Lar das Meninas</Text>
                        </View>
                        <Text></Text>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}> 2 Orfanatos encontrados</Text>
                <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
                    <Feather name="plus" size={20} color="#fff" />
                </RectButton>
            </View>
        </View >
    )
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
        fontFamily: 'Nunito_700Bold',
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
        fontFamily: 'Nunito_700Bold',
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