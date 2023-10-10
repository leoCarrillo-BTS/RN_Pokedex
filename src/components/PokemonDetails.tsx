import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FullPokemon } from '../interfaces/PokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import { Stat } from '../interfaces/pokemonInterfaces';

interface Props {
    pokemon: FullPokemon
}

export const PokemonDetails = ({ pokemon }: Props) => {

    return (

        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'white',
            }}
            showsVerticalScrollIndicator={false}
        >

            {/* TYPES */}
            <View
                style={{
                    ...localStyles.container,
                    marginTop: 400,
                }}
            >
                <Text style={localStyles.title}>Types</Text>
                <View style={localStyles.horizontalTexts}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...localStyles.regularText,
                                    marginRight: 8
                                }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* PESO */}
            <View
                style={{
                    ...localStyles.container,
                }}
            >
                <Text style={localStyles.title}>Peso</Text>
                <Text style={localStyles.regularText}>{pokemon.weight / 10} Kg.</Text>
            </View>

            {/* SPRITES */}
            <View
                style={{
                    ...localStyles.container,
                }}
            >
                <Text style={localStyles.title}>Sprites</Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={localStyles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_default}
                        style={localStyles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.front_shiny}
                        style={localStyles.basicSprite}
                    />
                    <FadeInImage
                        uri={pokemon.sprites.back_shiny}
                        style={localStyles.basicSprite}
                    />
                </ScrollView>

            </View>

            {/* ABILITIES     */}
            <View
                style={{
                    ...localStyles.container,
                }}
            >
                <Text style={localStyles.title}>Habilidades Base</Text>
                <View style={localStyles.horizontalTexts}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...localStyles.regularText,
                                    marginRight: 8
                                }}
                                key={ability.name}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* MOVIMIENTOS     */}
            <View
                style={{
                    ...localStyles.container,
                }}
            >
                <Text style={localStyles.title}>Movimientos</Text>
                <View style={localStyles.horizontalTexts}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...localStyles.regularText,
                                    marginRight: 8
                                }}
                                key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* STATS     */}
            <View
                style={{
                    ...localStyles.container,
                }}
            >
                <Text style={localStyles.title}>Stats</Text>
                <View >
                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                key={stat.stat.name + i}
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text
                                    style={{
                                        ...localStyles.regularText,
                                        marginRight: 8,
                                        width: 150,
                                        opacity: 0.5
                                    }}
                                    key={stat.stat.name}
                                >
                                    {stat.stat.name}
                                </Text>
                                <Text
                                    style={{
                                        ...localStyles.regularText,
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>

            {/* SPRITE FINAL */}
            <View
                style={{
                    marginTop: 22,
                    marginBottom: 88,
                    alignItems: 'center',
                    opacity: 0.3
                }}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={localStyles.basicSprite}
                />
            </View>


        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 22,
        marginBottom: 8
    },
    regularText: {
        fontSize: 16
    },
    basicSprite: {
        width: 100,
        height: 100
    },
    horizontalTexts: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});