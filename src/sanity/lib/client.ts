import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skHN9U8QcQR1xy2Ws4vsSpLbDpmNijQLtyj3uceI9zlwOybdKNj8fEvLg8NpdxEADhXCDS2q1vojFEgBuur7L3H9LjCgOGpK9VSqHBDUeVDVLy9DESiNoL7vGIpBpK7bxuDUk0V5iT0r70VYO8UybPjfqZJJf1ggClDh6sAWUplGFTcF9K88"
})
