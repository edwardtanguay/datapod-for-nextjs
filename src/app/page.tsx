import * as config from "@/config";

export default function Home() {
	return (
		<div>
			<p>Welcome to this site.</p>
			<p>{config.getSiteLocation()}</p>
		</div>
	);
}
