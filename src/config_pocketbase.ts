import PocketBase from "pocketbase";

// API-Call
const baseUrl = "http://127.0.0.1:8090";

export const pb = new PocketBase(baseUrl);

export const getSeeds = async () => {
  //return await pb.collection("seeds").getFullList(); // Sascha's Line
  return await pb.collection("seeds").getFullList(200, {
    sort: "-created",
    expand: "author, environments, principles",
  });
};

// path for <Picture /> and <Image />
export const filePath = (seed: any, name: string) =>
  `${baseUrl}/api/files/${seed.collectionId}/${seed.id}/${seed[name]}`;
