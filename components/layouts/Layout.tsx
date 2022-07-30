import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface ComponentProps {
    children: React.ReactNode,
    title?: string
}

export const Layout: FC<ComponentProps> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name="author" content="Daniel Díaz" />
            <meta name="description" content={`Información sobre el pokemon ${ title }`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>

        <Navbar />

        <main style={{
            padding: '0px 20px',
            paddingTop: '60px',
        }}>
            { children }
        </main>
    </>
  )
}
