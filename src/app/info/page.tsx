import Link from "next/link"
import * as config from '@/config';

export default function About() {
	const infos = config.getInfos();

	return (
		<div className="p-4">
			<ul>
				{infos.map((info) => (
					<li key={info.id}>
						<Link
							href={`info/${info.id}`}
						>
							{info.content}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}