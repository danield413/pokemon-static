import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from "react"

interface ComponentProps {
    id: number,
}

export const FavoriteCardPokemon: FC<ComponentProps> = ({ id }) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } onClick={onFavoriteClicked}>
            <Card isHoverable isPressable css={{padding: '10px'}}>
                <Card.Image 
                    src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` }
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
