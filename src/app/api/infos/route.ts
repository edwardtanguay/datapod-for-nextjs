import { Info } from '@/types';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
    const dataPath = join(process.cwd(), 'src', 'data', 'infos.json');
    const infos:Info[] = JSON.parse(readFileSync(dataPath, 'utf-8'));
    return Response.json(infos);
}