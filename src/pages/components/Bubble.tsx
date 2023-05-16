import { useState, useEffect } from 'react';

type BubbleProps = {
	children: React.ReactNode;
};

const colorMap = {
	0: 'bg-purple-400',
	1: 'bg-green-400',
	2: 'bg-pink-400',
	3: 'bg-blue-400',
	4: 'bg-yellow-400',
	5: 'bg-orange-400',
};

export default function Bubble(props: BubbleProps) {
	const [bgColor, setBgColor] = useState('');

	const chooseColor = () => {
		let temp = Math.floor(Math.random() * 6);
		let color = colorMap[temp as keyof typeof colorMap];
		setBgColor(color);

		return color;
	};

	useEffect(() => {
		chooseColor();
	}, []);

	return (
		<div className={`w-32 rounded-xl ${bgColor} text-center`}>
			{props.children}
		</div>
	);
}
