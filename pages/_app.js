import 'tailwindcss/tailwind.css';
import Layout from "../components/layout";
import NextNProgress from 'nextjs-progressbar';

function MyApp ( { Component, pageProps } ) {
	return (
		<Layout>
			<NextNProgress color="#B621FE" />
			<Component { ...pageProps } />
		</Layout>
	);
}
export default MyApp;
