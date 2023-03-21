type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
	return <div className='min-h-screen mx-auto bg-black'>{props.children}</div>;
}
