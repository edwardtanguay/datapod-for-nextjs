"use client";
import { Message } from "@/types";
import { useState } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { RxEnvelopeOpen } from "react-icons/rx";

interface IProps {
	message: Message;
}

export default function SingleFrontendMessage({ message }: IProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex gap-2 items-center">
			<p>
				{isOpen ? (
					<RxEnvelopeOpen
						className="text-green-700 cursor-pointer"
						onClick={handleOpenToggle}
					/>
				) : (
					<RxEnvelopeClosed
						className="text-red-400 cursor-pointer"
						onClick={handleOpenToggle}
					/>
				)}
			</p>
			<p className="text-gray-800">
				{isOpen ? (
					<>{message.text}</>
				) : (
					<>*********************************************</>
				)}
			</p>
		</div>
	);
}
