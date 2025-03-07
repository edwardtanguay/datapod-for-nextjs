export default function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	return (
		<div>
			<p>Info: {id}</p>
		</div>
	);
}