
import { sanityClient } from "@/sanity";
import { Experience, } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="experience"]{
        ...,
        technologies[]->
    }`;


    export default async function getExperiences ( ){
        try{
            const data = await sanityClient.fetch(query,{cache:"no-cache"});
            return data;
           } catch(err) { console.log(err)};
    }