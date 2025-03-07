import * as config from '@/config';

export async function GET() {
    const infos = config.getInfos()
    return Response.json(infos);
}