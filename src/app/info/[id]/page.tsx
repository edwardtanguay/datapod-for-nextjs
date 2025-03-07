const infos = [
	{ id: 1, content: "First item content" },
	{ id: 2, content: "Second item content" },
	{ id: 3, content: "Third item content" }
];
export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;
	const info = infos.find(m => m.id === Number(id));

	return (
		<div>
			<p>Info: {id}</p>
			{info && (
				<p>Content: {info.content}</p>
			)}
		</div>
	);
}