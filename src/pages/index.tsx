import Head from 'next/head';
import Layout from './components/Layout';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Site</title>
				<meta name='description' content='My portfolio site' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Nav />

			<Layout>
				<Content />
			</Layout>

			<Footer />
		</>
	);
}
