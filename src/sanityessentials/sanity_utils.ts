import sanityClient from './sanity';
let sanityQuery = (query:any, params:any)=> sanityClient.fetch(query, params);

export const getItems = ()=>{/**
    suppliers[]->{
            ...,
            type->{
                name
            },
            dishes[]->
            }

*/
    return sanityQuery(`
        *[_type == 'item'] {
            price, name, description,
        "slug":slug.current,
    "image":image.asset->url,
    "cat":cat->slug.current
        }
    `,{});
}

export const getCategories = ()=>{
    return sanityQuery(`
        *[_type == 'category']
    `,{});
}

export const getItemsById = (id:any)=>{
    /**
     * 
     * dishes[]->,
                type->{
                    name
                }
     */
    return sanityQuery(`
        *[_type == 'items' && _id == $id] {
            ...,
            suppliers[]->{
                ...,
                
            }
        }[0]
    `, {id})
}