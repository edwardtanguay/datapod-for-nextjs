export default function About() {
	const infos = [
		{ id: 1, content: "First item content" },
		{ id: 2, content: "Second item content" },
		{ id: 3, content: "Third item content" }
	];

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Info List</h1>
			<div className="space-y-4">
				{infos.map((info) => (
					<div key={info.id} className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow">
						<h2 className="text-xl font-semibold">Item {info.id}</h2>
						<p className="mt-2">{info.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}