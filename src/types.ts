export type Info = {
    id: number;
    content: string;
}

export type Message = {
    _id: string;
    text: string;
}


export type SiteLocation = "local" | "online" | "error";