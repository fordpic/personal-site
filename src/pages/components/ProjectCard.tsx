import Bubble from './Bubble';

export default function ProjectCard({ project }: any) {
	return (
		<div className='text-white flex flex-col space-y-8 border-2 border-green-300 p-8'>
			<h1 className='text-red-500 text-xl font-bold'>{project.title}</h1>
			{/* <img /> */}
			{project.tech.map((proj: any) => (
				<Bubble key={proj}>{proj}</Bubble>
			))}
			<p>{project.summary}</p>
		</div>
	);
}
