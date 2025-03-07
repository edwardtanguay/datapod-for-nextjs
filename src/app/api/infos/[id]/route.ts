import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { Info } from "@/types";
import * as config from "@/config";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	const { id } = await params;
	const numericId = parseInt(id);
	const dataPath = join(process.cwd(), "src", "data", "infos.json");
	const infos: Info[] = JSON.parse(readFileSync(dataPath, "utf-8"));
	const info = infos.find((info) => info.id === numericId);

	if (!info) {
		return NextResponse.json({ error: "Info not found" }, { status: 404 });
	}

	return NextResponse.json(info);
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	if (config.siteIsOnline()) {
		return NextResponse.json(
			{ error: "site must be local to delete items" },
			{ status: 403 }
		);
	}

	const { id } = await params;
	const numericId = parseInt(id);
	const dataPath = join(process.cwd(), "src", "data", "infos.json");
	const infos: Info[] = JSON.parse(readFileSync(dataPath, "utf-8"));

	const index = infos.findIndex((info) => info.id === numericId);

	if (index === -1) {
		return NextResponse.json({ error: "Info not found" }, { status: 404 });
	}

	infos.splice(index, 1);
	writeFileSync(dataPath, JSON.stringify(infos, null, 2));

	return NextResponse.json(
		{ success: true, message: "Info deleted successfully" },
		{ status: 200 }
	);
}
