import { Info } from "@/types";

export const getInfos = () : Info[] => {
	return [
		{ id: 1, content: "First item content" },
		{ id: 2, content: "Second item content" },
		{ id: 3, content: "Third item content" },
		{ id: 4, content: "Fourth item content" },
		{ id: 5, content: "Fifth item content" },
	];
}

export const getVersion = () : string => {
	return "0.00.17";
}