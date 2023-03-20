export default function Content() {
	return (
		<div className='flex flex-col text-center justify-center min-h-screen mx-16 pb-4 tracking-wide border-2 border-pink-500'>
			<p className='pb-14'>
				Hi there! My name is{' '}
				<span className='text-red-500 font-bold'>Ford Pickert</span> and I am a
				full-stack sofware developer currently looking to find a new, exciting
				job!
			</p>

			<p className='p-4'>
				I have been working in tech as a software engineer for the past two
				years now, focusing primarily on improving my skills with{' '}
				<span className='text-blue-500 font-bold'>TypeScript</span> and{' '}
				<span className='text-blue-500 font-bold'>Python</span> as well as
				learning new tools and libraries that I find interesting.
			</p>

			<p className='p-4'>
				Below you can find my resume, GitHub profile as well as numerous ways of
				reaching me - please reach out if you would like to discuss my past, my
				future, or any potential job openings that may be the right fit!
			</p>
		</div>
	);
}
