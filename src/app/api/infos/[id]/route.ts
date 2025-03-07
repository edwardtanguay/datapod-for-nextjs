import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Info } from '@/types';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
  const numericId = parseInt(id);
  const dataPath = join(process.cwd(), 'src', 'data', 'infos.json');
  const infos: Info[] = JSON.parse(readFileSync(dataPath, 'utf-8'));
  const info = infos.find(info => info.id === numericId);
  
  if (!info) {
    return NextResponse.json({ error: "Info not found" }, { status: 404 });
  }
  
  return NextResponse.json(info);
}