
import  ImageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: true,
})

const builder =  ImageUrlBuilder(client);

export function urlForImage(source) {
  return builder.image(source)
}