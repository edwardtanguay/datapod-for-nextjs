/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<div>
				<p className="mb-4"><b>404:</b> The page you're looking for doesn't exist.</p>
				<Link
					href="/"
					className="underline"
				>
					go back
				</Link>
			</div>
		</div>
	);
}