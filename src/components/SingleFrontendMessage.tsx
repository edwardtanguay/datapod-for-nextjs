import { FrontendMessage } from "@/types";
import { RxEnvelopeClosed } from "react-icons/rx";
import { RxEnvelopeOpen } from "react-icons/rx";

interface IProps {
	frontendMessage: FrontendMessage;
}

export default function SingleFrontendMessage({ frontendMessage }: IProps) {
	return (
		<div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex gap-2 items-center">
			<p>
				{frontendMessage.isOpen ? (
					<RxEnvelopeOpen className="text-green-700" />
				) : (
					<RxEnvelopeClosed className="text-red-400" />
				)}
			</p>
			<p className="text-gray-800">
				{frontendMessage.text} ({frontendMessage._id})
			</p>
		</div>
	);
}
