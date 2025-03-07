import { NextRequest, NextResponse } from 'next/server';
import { getInfos } from '@/config';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const infos = getInfos();
  const info = infos.find(info => info.id === id);
  
  if (!info) {
    return NextResponse.json({ error: "Info not found" }, { status: 404 });
  }
  
  return NextResponse.json(info);
}