import { Message } from "@/types";

export default async function Page() {
  let messages:Message[] = [];
  try {
    const res = await fetch(`${process.env.SITE_URL}/api/messages`);
    if (!res.ok) throw new Error('Failed to fetch messages');
    messages = await res.json();
  } catch (err) {
    console.error('Message fetch error:', err);
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-red-500 mt-4">Error loading messages</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
	<p>This is a page showing how to get data from a backend route, which fetches data from a MongoDB Atlas database.</p>
      <div className="mt-6 space-y-4">
        {messages.map((message, index) => (
          <div 
            key={index}
            className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-gray-800">{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}