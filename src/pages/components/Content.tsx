import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

export default function Content() {
	const router = useRouter();

	return (
		<div className='flex flex-col text-center text-lg justify-evenly min-h-screen tracking-wide border-2 border-pink-500'>
			<div className='text-green-500 p-24'>
				<Typewriter
					options={{
						strings: [
							'My name is Ford Pickert and I am a full-stack sofware engineer!',
						],
						autoStart: true,
						delay: 100,
						// @ts-ignore
						pauseFor: 4000,
						loop: true,
					}}
				/>
			</div>

			<p className='p-12 px-24 bg-slate-400'>
				I have been working as a software engineer for the past two years now,
				focusing primarily on improving my skills with{' '}
				<span className='text-blue-500 font-bold'>TypeScript</span> and{' '}
				<span className='text-blue-500 font-bold'>Python</span> as well as
				learning new tools and libraries that I find interesting.
				<br />
				<br />
				Ideally, I would love to find a job where I am constantly challenged and
				can improve my craft daily. I enjoy tackling new problems and would look
				to assist team members wherever needed; if that means learning an
				entirely new stack if it will benefit the team, then so be it!
				<br />
				<button
					onClick={() => router.push(`/Projects`)}
					className='border border-red-500 bg-red-500 hover:bg-red-300 rounded-xl h-16 w-48 mt-6 justify-center'>
					See All Projects
				</button>
			</p>

			<p className='p-12 px-24 bg-slate-500'>
				When I am not coding, I greatly enjoy reading and writing, which are two
				things that I have done extensively for my entire life. I have read tons
				of books ranging from classical history to modern spy thrillers and
				everything in between. I keep a reading list of my favorite non-fiction
				literature around to reference for my friends when they ask for a
				recommendation; please feel free to take a look at the list below if
				interested!
				<br />
				<button
					onClick={() => router.push(`/Books`)}
					className='border border-red-500 bg-red-500 hover:bg-red-300 rounded-xl h-16 w-48 mt-6 justify-center'>
					See Reading List
				</button>
			</p>

			<p className='p-12 px-24 bg-slate-400'>
				Below you can find my resume, GitHub profile as well as numerous ways of
				reaching me - please reach out if you would like to discuss my past, my
				future, or any potential job openings that may be the right fit!
				<br />
				<button className='border border-red-500 bg-red-500 hover:bg-red-300 rounded-xl h-16 w-48 mt-6 mr-1 justify-center'>
					See Resume
				</button>
				<button className='border border-red-500 bg-red-500 hover:bg-red-300 rounded-xl h-16 w-48 mt-6 ml-1 justify-center'>
					See GitHub
				</button>
			</p>
		</div>
	);
}
