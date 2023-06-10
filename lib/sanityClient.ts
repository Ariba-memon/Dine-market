import { createClient } from "next-sanity";

// import { apiVersion,dataset,projectId,useCdn } from "./env";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const client = createClient({
    apiVersion:"2023-06-06",
    dataset:"production",
    token:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    projectId: process.env.SANITY_ACCESS_TOKEN,
    useCdn:true,
})
