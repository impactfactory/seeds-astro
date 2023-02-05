// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import {
  animalsSchema,
  /*articlesSchema,
  authorsSchema,
  environmentsSchema,
  plantsSchema,
  principlesSchema,
  seedsSchema,*/
} from "../schemas";

// 2. Define your collection(s)
const animalsCollection = defineCollection({ schema: animalsSchema });
const articlesCollection = defineCollection({ schema: articlesSchema });
const authorsCollection = defineCollection({ schema: authorsSchema });
const environmentsCollection = defineCollection({ schema: environmentsSchema });
const plantsCollection = defineCollection({ schema: plantsSchema });
const principlesCollection = defineCollection({ schema: principlesSchema });
const seedsCollection = defineCollection({ schema: seedsSchema });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  animals: animalsCollection,
  articles: articlesCollection,
  authors: authorsCollection,
  environments: environmentsCollection,
  plants: plantsCollection,
  principles: principlesCollection,
  seeds: seedsCollection,
};
