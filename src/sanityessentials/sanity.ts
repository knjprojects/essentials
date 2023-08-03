//const { createClient} =require('@sanity/client')
import  {createClient}  from '@sanity/client';

import imageBuilder from '@sanity/image-url';

 const config = 
    {
    projectId: 'f32l6se5',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
    //token:add token for delwetions and creations


}
 const client:any = createClient(config)
const builder = imageBuilder(client);

export const urlFor = (source:any)=> builder.image(source);

export default client;