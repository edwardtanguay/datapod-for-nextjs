'use client';

import { FaRegTrashAlt } from "react-icons/fa";

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
		<span
			onClick={handleDelete}
		className="text-red-500 cursor-pointer"
		>
			<FaRegTrashAlt />
		</span>
	);
}