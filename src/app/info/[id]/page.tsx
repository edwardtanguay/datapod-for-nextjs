import { Info } from "@/types";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = (await params);

	// Fetch infos from backend route
	const response = await fetch(`http://localhost:3670/api/infos`);
	const infos: Info[] = await response.json();
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