export type Info = {
    id: number;
    content: string;
}

export type Message = {
    _id: string;
    text: string;
}

export type FrontendMessage = {
    _id: string;
    text: string;
    highlighted: boolean;
}

export type SiteLocation = "local" | "online" | "error";