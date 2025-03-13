export default function AboutPage() {
	return (
		<div className="max-w-4xl mx-auto p-4 page">
			<h1 className="text-3xl font-bold mb-4">About this site</h1>
			<p className="text-gray-600 mb-3">
				This is a Datapod site for Next.js 15, to be used as a
				template/framework for building sites.
			</p>
			<ul className="list-disc ml-4">
				<li>
					see{" "}
					<a
						href="https://datapod-tanguay-eu.vercel.app"
						target="_blank"
					>
						Project Datapod
					</a>{" "}
					for more details
				</li>
				<li>
					repo:{" "}
					<a
						href="https://github.com/edwardtanguay/datapod-for-nextjs"
						target="_blank"
					>
						https://github.com/edwardtanguay/datapod-for-nextjs
					</a>
				</li>
				<li>
					live:{" "}
					<a
						href="https://datapod-for-nextjs.vercel.app"
						target="_blank"
					>
						https://datapod-for-nextjs.vercel.app
					</a>
				</li>
			</ul>
		</div>
	);
}
