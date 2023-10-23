
import { sanityClient } from "@/sanity";
import { PageInfo,} from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="pageInfo"]`;

export default async function getPageInfo ( ){
    try{
        const data = await sanityClient.fetch(query,{cache:"no-cache"});
        return data;
       } catch(err) { console.log(err)};
}
