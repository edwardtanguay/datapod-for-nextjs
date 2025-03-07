import { NextRequest, NextResponse } from 'next/server';
import { getInfos } from '@/config';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  
  // Get all info items
  const infos = getInfos();
  
  // Find the specific info by id
  const info = infos.find(item => item.id === id);
  
  if (!info) {
    return NextResponse.json(
      { error: `Info with id ${id} not found` },
      { status: 404 }
    );
  }
  
  return NextResponse.json(info);
}