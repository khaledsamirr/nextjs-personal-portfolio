
import { sanityClient } from "@/sanity";
import { Social, } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="social"] `



    export default async function getSocials ( ){
        try{
            const data = await sanityClient.fetch(query,{cache:"no-cache"});
            return data;
           } catch(err) { console.log(err)};
    }
