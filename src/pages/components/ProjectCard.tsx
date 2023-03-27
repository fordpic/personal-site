import Bubble from './Bubble';

export default function ProjectCard({ project }: any) {
	return (
		<div className='text-white flex flex-col space-y-8 border-b border-red-400 mx-24 p-8'>
			<h1 className='text-red-500 text-xl font-bold'>{project.title}</h1>
			{/* <img /> */}
			<div className='flex justify-center space-x-4'>
				{project.tech.map((proj: any) => (
					<Bubble key={proj}>{proj}</Bubble>
				))}
			</div>
			<p>{project.summary}</p>
			<a href={project.link} target='_blank' rel='noreferrer'>
				<button className='bg-red-500 rounded-xl h-16 w-48 mt-2 mr-1 justify-center hoverEffect'>
					Check It Out
				</button>
			</a>
		</div>
	);
}
