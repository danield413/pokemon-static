import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface ComponentProps {
    children: React.ReactNode,
    title?: string
}

const origin = (typeof window === "undefined") ? '' : window.location.origin;

export const Layout: FC<ComponentProps> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title?.toUpperCase() || "Pokemon App"}</title>
                <meta name="author" content="Daniel Díaz" />
                <meta name="description" content={`Información sobre el pokemon ${ title }`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Èsta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.html`} />
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
