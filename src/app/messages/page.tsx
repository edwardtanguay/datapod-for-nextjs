import { FrontendMessage, Message } from "@/types";
import { FaStar } from "react-icons/fa6";

export default async function Page() {
	let messages: Message[] = [];
	const frontendMessages: FrontendMessage[] = [];

	try {
		const res = await fetch(`${process.env.SITE_URL}/api/messages`);
		if (!res.ok) throw new Error("Failed to fetch messages");
		messages = await res.json();

		for (const message of messages) {
			const frontendMessage: FrontendMessage = {
				_id: message._id,
				text: message.text,
				highlighted: false,
			};
			frontendMessages.push(frontendMessage);
		}
	} catch (err) {
		console.error("Message fetch error:", err);
		return (
			<div className="max-w-4xl mx-auto p-4">
				<div className="text-red-500 mt-4">Error loading messages</div>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto p-4">
			<p>
				This is a page showing how to get data from a backend route,
				which fetches data from a MongoDB Atlas database.
			</p>
			<div className="mt-6 space-y-4">
				{frontendMessages.map((frontendMessage, index) => (
					<div
						key={index}
						className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex gap-2 items-center"
					>
						<p>{frontendMessage.highlighted ? <FaStar className="text-yellow-500" /> : <FaStar className="text-gray-400" />}</p>
						<p className="text-gray-800">
							{frontendMessage.text} ({frontendMessage._id})
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
