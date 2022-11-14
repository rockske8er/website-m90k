import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  token: import.meta.env.VITE_SANITY_TOKEN,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
})

const builder = imageUrlBuilder(sanity)

export const urlFor = (source: string) => builder.image(source)
