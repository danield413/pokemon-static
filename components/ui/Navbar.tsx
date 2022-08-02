import { Link, Spacer, Text } from "@nextui-org/react";

import NextLink from 'next/link'
import { Image } from "./Image";

export const Navbar = () => {

    // const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            position: "fixed",
            zIndex: '100',
            backdropFilter: 'blur(20px)',
        }}>
    
            <Image 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="Icono de la App"
              width={40}
              height={40}
            />

            <NextLink href="/" passHref>
                <Link>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon!</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1}}/>

            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color="white" css={{fontWeight: 'bold'}}>Favoritos</Text>
                </Link>
            </NextLink>


        </div>
    )
}
