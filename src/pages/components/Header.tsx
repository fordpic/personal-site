import Typewriter from 'typewriter-effect';

export default function Header() {
	return (
		<div className='border-b border-red-500 mx-auto min-w-full py-4 text-center backdrop-saturate-125 bg-white/30 bg-[url("../../public/static.avif")]'>
			<h1 className='font-extrabold tracking-widest text-4xl text-green-500 shadow-2xl'>
				<Typewriter
					options={{
						strings: ['WELCOME TO FORDS PORTFOLIO'],
						autoStart: true,
						delay: 100,
						// @ts-ignore
						pauseFor: 10000000000000,
						loop: true,
					}}
				/>
			</h1>
		</div>
	);
}
