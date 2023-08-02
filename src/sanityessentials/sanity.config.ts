import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemas} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanityessentials',

  projectId: process.env.EXPO_PUBLIC_SANITY_API_KEY || 'f32l6se5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  //below commented ouyt code is an alternatice to typing the schema and using just schemas=[] array
  schema: //{
 /*types: */    schemas,
  //},
})
