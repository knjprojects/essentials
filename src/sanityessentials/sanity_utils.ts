import {createClient} from '@sanity/client';
import { Item } from "../../typings";
import {apiVersion, dataset, projectId} from './env'
import client from './sanity';
const config={
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
}

export async function getItems(): Promise<Item[]> {
  return await client.fetch(
  `*[_type == "item"]{
      price, name, type, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat":cat->slug.current
    }`,
    
  )
}
/*export async function getDishesbyCategory(cat:string): Promise<Dish[]> {
  return await createClient(config).fetch(// chef->{name},
    groq`*[_type == 'dish' && cat->slug.current==$cat ]{
      price, name, type, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat": cat->slug.current
    }`,
    { cat }
  )
}*/
//excluding our friday and wednesday specials hich is bbq and chifrychci
export async function getItemsbyCategory(cat:string): Promise<Item[]> {
  return await client.fetch(// chef->{name},
    `*[_type == 'item' && cat->slug.current==$cat ]{
      price, name, type, description,
      "slug":slug.current,
      "image":image.asset->url,
      "cat": cat->slug.current
    }`,
    { cat }
  )
}
export async function getItem(slug: string): Promise<Item> {
  return await client.fetch(
    `*[_type == "item" && slug.current == $slug][0]{
      price, name, type, description, 
      "slug": slug.current,
      "image": image.asset->url,
      "cat": cat->slug.current
    }`,
    { slug }
  )
}
  /*perspective: 'published',
    studioUrl: '/studio',
    logger: console,*/
  //token:process.env.sanityToken