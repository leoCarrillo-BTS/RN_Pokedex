import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets()
    const { simplePokemonList, loadPokemons } = usePokemonPaginated()
    console.log(simplePokemonList)

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View
                style={{
                    // ...styles.globalMargin,
                    alignItems: 'center',
                }}
            >
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={(
                        <Text
                            style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                top: top + 16,
                                marginBottom: top + 24,
                            }}
                        >
                            Pokedex
                        </Text>
                    )}
                    numColumns={2}
                    renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={
                        <ActivityIndicator
                            style={{
                                height: 88,
                            }}
                            size={16}
                            color={'gray'}
                        />
                    }
                />

            </View>
        </>
    )
}
