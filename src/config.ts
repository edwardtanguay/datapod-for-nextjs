import * as config from "./config";
import { SiteLocation } from "./types";

export const version = (): string => {
	return "0.00.31";
};

export const siteLocation = (): SiteLocation => {
	return process.env.SITE_URL
		? process.env.SITE_URL.includes("http://localhost")
			? "local"
			: "online"
		: "error";
};

export const siteIsLocal = (): boolean => {
	return config.siteLocation() === "local";
};

export const siteIsOnline = (): boolean => {
	return config.siteLocation() === "online";
};
