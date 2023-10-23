
import { sanityClient } from "@/sanity";
import { Experience, Project, } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="project"]{
        ...,
        technologies[]->
    } `;

    export default async function getProjects ( ){
        try{
            const data = await sanityClient.fetch(query,{cache:"no-cache"});
            return data;
           } catch(err) { console.log(err)};
    }