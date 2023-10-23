
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="skill"] `

    export default async function getSkills ( ){
        try{
            const data = await sanityClient.fetch(query,{cache:"no-cache"});
            return data;
           } catch(err) { console.log(err)};
    }