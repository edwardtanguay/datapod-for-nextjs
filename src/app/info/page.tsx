import DeleteButton from "@/components/DeleteButton";
import { Info } from "@/types";
import Link from "next/link";
import * as config from "@/config";

export default async function InfoPage() {
	// Use absolute URL with process.env or a hardcoded base URL
	// const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3670'}/api/infos`);
	const response = await fetch(process.env.SITE_URL + "/api/infos", {
		cache: "no-store",
	});
	const infos: Info[] = await response.json();

	return (
		<div>
			<ul>
				{infos.map((info) => (
					<li key={info.id} className="mb-2 flex gap-1 items-center">
						<Link href={`info/${info.id}`}>{info.content}</Link>
						{config.siteIsLocal() && <DeleteButton id={info.id} />}
					</li>
				))}
			</ul>
		</div>
	);
}
