import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'; // Dimensions retorna a dimensão da tela
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps' // Importando mapa
import { Feather } from '@expo/vector-icons'
import mapMarker from '../images/map-marker.png'
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Orphanage {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}
export default function OrphanagesMap() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    const navigation = useNavigation()
    // console.log(orphanages);
    useEffect(() => {
        api.get('orphanages')
            .then(response => {
                setOrphanages(response.data)
            })
    }, [])

    function handleNavigateToOrphanageDetails(id: number) {
        navigation.navigate('OrphanageDetails', { id }) // Passando id como parâmetro
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
                    latitude: -22.507367,
                    longitude: -48.5486447,
                    latitudeDelta: 0.090,
                    longitudeDelta: 0.090,
                }}
            >

                {
                    orphanages.map(orphanage => {
                        return (
                            <Marker
                                key={orphanage.id}
                                icon={mapMarker}
                                calloutAnchor={{
                                    x: 2.7,
                                    y: 0.8,
                                }}
                                coordinate={{
                                    latitude: orphanage.latitude,
                                    longitude: orphanage.longitude,
                                }}
                            >
                                <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>{orphanage.name}</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        )
                    })
                }

            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}> {orphanages.length} Orfanatos encontrados</Text>
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