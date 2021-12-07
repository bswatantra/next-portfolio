import Head from 'next/head';
import Image from 'next/image';
import hero from '../public/images/hero.svg';
import Hero from "../components/hero";

export default function Home() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-800">
            <Head>
                <title>Swatantra</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Hero/>
        </div>
    );
}
