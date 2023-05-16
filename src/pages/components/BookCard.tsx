export default function BookCard({ book }: any) {
	return (
		<>
			<div className='border-b-4 border-double border-red-500 text-white p-6 mx-96 space-y-2 tracking-wide hover:bg-slate-900'>
				<a href={book?.link} target='_blank'>
					<div className='text-lg text-red-500'>{book?.title}</div>
					<div className='text-md'>{book?.author}</div>
				</a>
			</div>
		</>
	);
}
