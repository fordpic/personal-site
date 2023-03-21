import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import BookCard from './components/BookCard';
import HomeButton from './components/HomeButton';
import { bookList } from '@/bookList';

export default function Books() {
	return (
		<div>
			<Header />
			<Layout>
				<div className='text-center'>
					{bookList.map((book: any) => (
						<BookCard key={book} book={book}></BookCard>
					))}
				</div>
				<div className='flex justify-center p-8'>
					<HomeButton />
				</div>
			</Layout>
			<Footer />
		</div>
	);
}
