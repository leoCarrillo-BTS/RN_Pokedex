import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';


const screenWidth = Dimensions.get('window').width

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()

    const [pokemonFiltered, setpokemonFiltered] = useState<SimplePokemon[]>([])

    const [term, setTerm] = useState('')

    useEffect(() => {

        if (term.length === 0) {
            return setpokemonFiltered([])
        }

        if (isNaN(Number(term))) {
            setpokemonFiltered(
                simplePokemonList.filter(poke => poke.name.toLowerCase().includes(term.toLowerCase()))
            )
        } else {

            const pokemonById = simplePokemonList.find(
                poke => poke.id === term
            )!

            setpokemonFiltered(
                (pokemonById) ? [pokemonById] : []
            )
        }

    }, [term])


    if (isFetching) {
        return <Loading />
    }

    return (
        <View
            style={{
                flex: 1,
                marginTop: top + 8,
                marginHorizontal: 16,
                backgroundColor: 'white'
            }}
        >
            <SearchInput
                onDebounce={(value) => setTerm(value)}
            />

            <FlatList
                data={pokemonFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <Text
                        style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            marginBottom: 16,
                            marginTop: 16
                        }}
                    >
                        {term}
                    </Text>
                )}
                numColumns={2}
                renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
                ListFooterComponent={
                    <View
                        style={{
                            height: 88
                        }}
                    ></View>
                }
            />

        </View>
    )
}
