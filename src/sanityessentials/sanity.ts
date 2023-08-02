import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'f32l6se5',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2023-06-19',


})
const builder = imageBuilder(client);

export const urlFor = (source:any)=> builder.image(source);

export default client;