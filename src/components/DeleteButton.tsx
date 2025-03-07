'use client';

export default function DeleteButton({ id }: { id: number }) {
	const handleDelete = async () => {
		try {
			const response = await fetch(`/api/infos/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Failed to delete');
			}

			window.location.reload();
		} catch (err: unknown) {
			alert(`Failed to delete info: ${(err as Error).message}`);
		}
	};

	return (
		<button
			onClick={handleDelete}
			className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
		>
			Delete
		</button>
	);
}