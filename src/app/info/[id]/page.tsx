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
			{info && (
				<div key={info.id} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
					<h2 className="text-xl font-semibold">Item {info.id}</h2>
					<p className="mt-2">{info.content}</p>
				</div>
			)}
		</div>
	);
}