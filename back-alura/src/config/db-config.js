import { MongoClient } from "mongodb";

export default async function connectionBase(stringConnection) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConnection);
        console.log("Connecting in Cluster of Data Base");
        await mongoClient.connect();
        console.log("Connection Successfully!!");

        return mongoClient;
    }
    catch(error) {
        console.log("No Connection!!", error);
        process.exit();
    }
} 