import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import { join } from "path";

export async function POST(request: NextRequest) {
	try {
		const { note } = await request.json();

		if (!note) {
			return NextResponse.json(
				{ error: "note is required" },
				{ status: 400 }
			);
		}

		const dataPath = join(process.cwd(), "src", "data", "note.txt");
		writeFileSync(dataPath, note, "utf-8");

		return NextResponse.json(
			{ success: true, note: "note saved successfully" },
			{ status: 200 }
		);
	} catch (err: unknown) {
		return NextResponse.json(
			{ error: "Failed to save note: " + (err as Error).message },
			{ status: 500 }
		);
	}
}
