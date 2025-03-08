import NotFound from "@/app/not-found";
import { Info } from "@/types";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const response = await fetch(process.env.SITE_URL + `/api/infos/${id}`);
	if (!response.ok) {
		return <NotFound />;
	} else {
		const info: Info = await response.json();

		return (
			<div>
				{info && (
					<div
						key={info.id}
						className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
					>
						<h2 className="text-xl font-semibold">
							Item {info.id}
						</h2>
						<p className="mt-2">{info.content}</p>
					</div>
				)}
			</div>
		);
	}
}
