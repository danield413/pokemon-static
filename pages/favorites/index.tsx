import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { localFavorites } from '../../utils';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage: NextPage = () => {

  const [favPokemons, setFavPokemons] = useState<number[]>([]);

  useEffect(() => {
      setFavPokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title='Pokemons - Favoritos'>
        {
          favPokemons.length === 0
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons pokemons={ favPokemons } /> )
        }
    </Layout>
  )
}

export default FavoritesPage