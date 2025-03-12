import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import { join } from "path";

export async function POST(request: NextRequest) {
	try {
		const { message } = await request.json();

		if (!message) {
			return NextResponse.json(
				{ error: "Message is required" },
				{ status: 400 }
			);
		}

		const dataPath = join(process.cwd(), "src", "data", "message.txt");
		writeFileSync(dataPath, message, "utf-8");

		return NextResponse.json(
			{ success: true, message: "Message saved successfully" },
			{ status: 200 }
		);
	} catch (err: unknown) {
		return NextResponse.json(
			{ error: "Failed to save message: " + (err as Error).message },
			{ status: 500 }
		);
	}
}
