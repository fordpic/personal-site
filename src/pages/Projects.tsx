import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeButton from './components/HomeButton';

export default function Projects() {
	return (
		<div>
			<Header />
			<Layout>
				<div className='text-red-500 text-center text-3xl font-bold pt-12'>
					Coming Soon!
				</div>
				<div className='flex justify-center mt-8'>
					<HomeButton />
				</div>
			</Layout>
			<Footer />
		</div>
	);
}
