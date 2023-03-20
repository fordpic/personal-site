import { useRouter } from 'next/router';

export default function Content() {
	const router = useRouter();

	return (
		<div className='flex flex-col text-center text-lg justify-evenly min-h-screen tracking-wide border-2 border-pink-500'>
			<p className='p-20 bg-pink-200 text-xl font-bold'>
				Hi there! My name is{' '}
				<span className='text-red-500 font-bold'>Ford Pickert</span> and I am a
				full-stack sofware engineer!
			</p>

			<p className='p-8 px-20 bg-pink-200'>
				I have been working in tech as a software engineer for the past two
				years now, focusing primarily on improving my skills with{' '}
				<span className='text-blue-500 font-bold'>TypeScript</span> and{' '}
				<span className='text-blue-500 font-bold'>Python</span> as well as
				learning new tools and libraries that I find interesting.
				<br />
				<br />
				Ideally, I would love to find a job where I am constantly challenged and
				can improve my skills daily.
				<br />
				<button
					onClick={() => router.push(`/Projects`)}
					className='border border-red-500 bg-red-500 hover:bg-red-300 rounded-xl h-16 w-48 mt-4 justify-center'>
					See All Projects
				</button>
			</p>

			<p className='p-20 bg-pink-200'>
				Below you can find my resume, GitHub profile as well as numerous ways of
				reaching me - please reach out if you would like to discuss my past, my
				future, or any potential job openings that may be the right fit!
				<br />
				<button className='border border-red-500 bg-red-500 hover:bg-red-300 rounded-xl h-16 w-48 mt-4 mr-1 justify-center'>
					See Resume
				</button>
				<button className='border border-red-500 bg-red-500 hover:bg-red-300 rounded-xl h-16 w-48 mt-4 ml-1 justify-center'>
					See GitHub
				</button>
			</p>
		</div>
	);
}
