import { NextRequest, NextResponse } from 'next/server';
import { getInfos } from '@/config';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
  const numericId = parseInt(id);
  const infos = getInfos();
  const info = infos.find(info => info.id === numericId);
  
  if (!info) {
    return NextResponse.json({ error: "Info not found" }, { status: 404 });
  }
  
  return NextResponse.json(info);
}