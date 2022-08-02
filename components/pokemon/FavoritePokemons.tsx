import { Grid } from '@nextui-org/react'
import{ FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface ComponentProps {
    pokemons: number[],
}

export const FavoritePokemons: FC<ComponentProps> = ({ pokemons: favPokemons }) => {
  return (
    <Grid.Container gap={ 2 } direction="row" justify='flex-start'>
    {
      favPokemons.map(id => (
        <FavoriteCardPokemon key={id} id={id}/>
      ))
    }
  </Grid.Container>
  )
}
