import { Linkedin, GitHub, Mail } from 'react-feather';

export default function Footer() {
	return (
		<footer className='text-center justify-center space-x-4 py-2 flex bg-slate-400'>
			{/* GitHub */}
			<div>
				<a href='https://github.com/fordpic' target='_blank'>
					<GitHub size={18} />
				</a>
			</div>

			{/* Email */}
			<div>
				<a href='mailto:fordpickert@gmail.com' target='_blank'>
					<Mail size={18} />
				</a>
			</div>

			{/* LinkedIn */}
			<div>
				<a href='https://www.linkedin.com/in/fordpickert/' target='_blank'>
					<Linkedin size={18} />
				</a>
			</div>
		</footer>
	);
}
