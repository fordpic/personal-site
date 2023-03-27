import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeButton from './components/HomeButton';
import ProjectCard from './components/ProjectCard';
import { projectList } from '@/projectList';

export default function Projects() {
	return (
		<div>
			<Header />
			<Layout>
				<div className='text-center'>
					{projectList.map((proj: any) => (
						<ProjectCard key={proj.title} project={proj}></ProjectCard>
					))}
				</div>
				<div className='flex justify-center mt-8'>
					<HomeButton />
				</div>
			</Layout>
			<Footer />
		</div>
	);
}
