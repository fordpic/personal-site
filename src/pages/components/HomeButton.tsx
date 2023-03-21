import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-feather';

export default function HomeButton() {
	const router = useRouter();
	return (
		<button
			onClick={() => router.push(`/`)}
			className='bg-red-500 rounded-xl h-16 w-48 mt-6 flex justify-center items-center hoverEffect'>
			<ArrowLeft className='h-5 mr-2' /> Back to home
		</button>
	);
}
