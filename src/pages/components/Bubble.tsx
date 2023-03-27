type BubbleProps = {
	children: React.ReactNode;
};

export default function Bubble(props: BubbleProps) {
	return (
		<div className='h-5 w-5 rounded-xl bg-purple-400'>{props.children}</div>
	);
}
