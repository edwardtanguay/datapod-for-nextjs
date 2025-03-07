import { Info } from "@/types";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = (await params);

	// Fetch infos from backend route
	const response = await fetch(process.env.SITE_URL + `/api/infos/${id}`);
	const info: Info = await response.json();

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