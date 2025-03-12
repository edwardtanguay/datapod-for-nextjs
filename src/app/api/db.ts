import { MongoClient, ServerApiVersion } from "mongodb";

export const connectToDb = async () => {
	const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xidme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

	const client = new MongoClient(uri, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		},
	});

	try {
		await client.connect();
	} finally {
		await client.close();
	}
};
