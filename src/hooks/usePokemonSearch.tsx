import { useEffect, useRef, useState } from "react"
import { pokemonApi } from "../api/pokemonApi"
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces/PokemonInterfaces"

export const usePokemonSearch = () => {

    const [isFetching, setisFetching] = useState(true)
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])

    const loadPokemons = async () => {

        setisFetching(true)

        const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200')
        mapPokemonList(resp.data.results)
    }

    const mapPokemonList = (pokemonList: Result[]) => {

        pokemonList.forEach(poke => console.log(poke.name))

        const newPokeList: SimplePokemon[] = pokemonList.map(({ name, url }) => {

            const urlParts = url.split('/')
            const id = urlParts[urlParts.length - 2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            return {
                id,
                picture,
                name
            }
        })

        setSimplePokemonList(newPokeList)

        setisFetching(false)
    }

    useEffect(() => {
        loadPokemons()

    }, [])

    return {
        isFetching,
        simplePokemonList
    }
}
