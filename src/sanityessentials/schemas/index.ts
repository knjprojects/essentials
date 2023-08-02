//export const schemaTypes = [] original code, but i rewrite it with nextjs code because it has the type definitions with it, but since react native is different, i will remember to remove the type definitions if they make my code crash
import { type SchemaTypeDefinition } from 'sanity'
import dish from './item'
import cat from './category'
                    //=[] alternative, check sanity.config.ts
export const schemas: { types: SchemaTypeDefinition[] } = {
  types: [
    dish, cat
  ],
}

