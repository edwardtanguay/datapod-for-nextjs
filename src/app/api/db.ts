import { MongoClient, Db, ServerApiVersion } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export const connectToDb = async () => {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb };
	}
	const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xidme.mongodb.net/datapod-test-data?retryWrites=true&w=majority&appName=Cluster0`;

	const client = new MongoClient(uri, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		},
	});

	await client.connect();

	cachedClient = client;
	cachedDb = client.db();

	return { client, db: client.db() };
};
