// Project Config
import PocketBase from "pocketbase";

export const baseUrl = "http://127.0.0.1:8090";

export const pb = new PocketBase(baseUrl);

// Calls for Animals
export const getAnimals = async () => {
  return await pb.collection("animals").getFullList(200, {
    sort: "+name",
  });
};

export const filePathAnimals = (animal: any, name: string) =>
  `${baseUrl}/api/files/${animal.collectionId}/${animal.id}/${animal[name]}`;

// Calls for Authors
export const getAuthors = async () => {
  return await pb.collection("authors").getFullList(200, {
    sort: "+firstname",
  });
};

export const filePathAuthors = (author: any, firstname: string) =>
  `${baseUrl}/api/files/${author.collectionId}/${author.id}/${author.img}`;

// Calls for Environments
export const getEnvironments = async () => {
  return await pb.collection("environments").getFullList(200, {
    sort: "+name",
  });
};

export const filePathEnvironments = (env: any, name: string) =>
  `${baseUrl}/api/files/${env.collectionId}/${env.id}/${env[name]}`;

// Calls for Plants
export const getPlants = async () => {
  return await pb.collection("plants").getFullList(200, {
    sort: "+name",
  });
};

export const filePathPlants = (plant: any, name: string) =>
  `${baseUrl}/api/files/${plant.collectionId}/${plant.id}/${plant[name]}`;

// Calls for Principles
export const getPrinciples = async () => {
  return await pb.collection("principles").getFullList(200, {
    sort: "+name",
  });
};

export const filePathPrinciples = (principle: any, name: string) =>
  `${baseUrl}/api/files/${principle.collectionId}/${principle.id}/${principle[name]}`;

// Calls for Seeds
export const getSeeds = async () => {
  return await pb.collection("seeds").getFullList(200, {
    sort: "-created",
    expand:
      "animals, author, environments, plants, principles, steps, steps.subs",
  });
};

export const filePath = (seed: any, name: string) =>
  `${baseUrl}/api/files/${seed.collectionId}/${seed.id}/${seed[name]}`;

//Calls for Steps
export const filePathSteps = (step: any, title: string) =>
  `${baseUrl}/api/files/${step.collectionId}/${step.id}/${step[title]}`;
