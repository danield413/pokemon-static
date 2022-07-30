import { FC } from 'react';
import { Card, Row, Text, Grid } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface ComponentProps {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<ComponentProps> = ({ pokemon }) => {

    const router = useRouter();
    const { id, name, img } = pokemon;

    const onClick = () =>  {
        router.push(`/pokemon/${ id+1 }`);
    }

    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={id}>
            <Card 
                isHoverable 
                isPressable 
                css={{w:"100%"}}
                onClick={onClick}
            >
                <Card.Body css={{ p: 0 }}>
                    <Card.Image 
                        src={ img }
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#00000066",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row justify='space-between'>
                    <Text transform='capitalize'>{ name }</Text>
                    <Text># { id+1 }</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
