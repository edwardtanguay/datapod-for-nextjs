import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "../../db";
import { ObjectId } from "mongodb";

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const { id } = params;
		const { db } = await connectToDb();

		const result = await db.collection("messages").deleteOne({
			_id: new ObjectId(id),
		});

		if (result.deletedCount === 0) {
			return NextResponse.json(
				{ error: "Message not found" },
				{ status: 404 }
			);
		}

		return NextResponse.json(
			{ success: true, message: "Message deleted successfully" },
			{ status: 200 }
		);
	} catch (err: unknown) {
		return NextResponse.json(
			{ error: "Failed to delete message: " + (err as Error).message },
			{ status: 500 }
		);
	}
}
