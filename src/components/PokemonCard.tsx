import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/PokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';

interface Props {
    pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('red')
    const isMounted = useRef(true)
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()

    useEffect(() => {

        const fallBackColor = '#C6D8FF'

        ImageColors.getColors(pokemon.picture, { fallback: fallBackColor })
            .then(colors => {

                // No hacer actualización de color si el componente aún no está montado
                if (!isMounted.current) return

                if (colors.platform === 'android') {
                    setBgColor(colors.dominant || fallBackColor)
                } else if (colors.platform === 'ios') {
                    setBgColor(colors.background || fallBackColor)
                }
            })

        return () => {
            isMounted.current = false
        }
    }, [])

    return (

        <TouchableOpacity
            activeOpacity={0.7}
            onPress={
                () => navigation.navigate('PokemonScreen', {
                    simplePokemon: pokemon,
                    color: bgColor
                })
            }
        >
            <View
                style={{
                    ...localStyles.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: bgColor
                }}
            >
                <View>
                    <Text style={{
                        ...localStyles.name
                    }}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                <View
                    style={localStyles.pokebolaContainer}
                >
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={localStyles.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={localStyles.pokemonImage}
                />

            </View>
        </TouchableOpacity>




        // <Text>{item.name}</Text>
    )
}

const localStyles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 8,
        height: 120,
        width: 160,
        marginBottom: 22,
        borderRadius: 8,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    name: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        top: 16,
        left: 8,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.6,
        overflow: 'hidden',
    },
});
