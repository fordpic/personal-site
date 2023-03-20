type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
	return (
		<div className='border-4 border-red-500 min-h-screen mx-auto'>
			{props.children}
		</div>
	);
}
