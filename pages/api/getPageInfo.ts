
import { sanityClient } from "@/sanity";
import { PageInfo,} from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="pageInfo"]`;

type Data={
    pageInfo:PageInfo[]
}
export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data>){
    try{
        const pageInfo= await sanityClient.fetch(query);
        return res.status(200).json({pageInfo});
    
    
       } catch(err) { console.log(err)};
}