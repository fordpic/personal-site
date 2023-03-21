import { Linkedin, GitHub, Mail, Twitter } from 'react-feather';

export default function Footer() {
	return (
		<footer className='text-center justify-center space-x-4 py-2 flex bg-slate-600 border-t border-red-500'>
			{/* GitHub */}
			<div>
				<a
					href='https://github.com/fordpic'
					target='_blank'
					className='hover:text-red-500'>
					<GitHub size={20} />
				</a>
			</div>

			{/* Email */}
			<div>
				<a
					href='mailto:fordpickert@gmail.com'
					target='_blank'
					className='hover:text-red-500'>
					<Mail size={20} />
				</a>
			</div>

			{/* LinkedIn */}
			<div>
				<a
					href='https://www.linkedin.com/in/fordpickert/'
					target='_blank'
					className='hover:text-red-500'>
					<Linkedin size={20} />
				</a>
			</div>

			{/* Twitter */}
			<div>
				<a
					href='https://twitter.com/ford_codes'
					target='_blank'
					className='hover:text-red-500'>
					<Twitter size={20} />
				</a>
			</div>
		</footer>
	);
}
