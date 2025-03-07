import * as config from "@/config";

export default function Home() {
	return (
		<div>
			<p>Welcome to this site.</p>
			<p>This site is: {config.siteLocation()}</p>
		</div>
	);
}
