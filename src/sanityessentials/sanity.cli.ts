import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.EXPO_PUBLIC_SANITY_API_KEY    || 'f32l6se5',
    dataset: 'production'
  }
})
