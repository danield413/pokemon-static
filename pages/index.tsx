import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts/Layout';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemonList';
import { PokemonCard } from '../components/pokemon';

interface ComponentProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<ComponentProps> = ({ pokemons }) => {

  return (
    <Layout title='Listado de pokémons'>
      <Grid.Container gap={ 2 } justify="flex-start"> 
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=50');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index++,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index++}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
