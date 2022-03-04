import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: space,
  accessToken: accessToken,
})

export const fetchEntries = async (options) => {
  const entries = await client.getEntries(options)
  console.log(entries);
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

// export const fetchEntry = async (slug) => {
//   const entry = await client.getEntry({slug})
//   console.log('entry : ', entry.fields);
//   if (entry.fields) return entry.fields
//   console.log(`Error getting Entry for ${contentType.name}.`)
// }
