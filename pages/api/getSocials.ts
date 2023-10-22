
import { sanityClient } from "@/sanity";
import { Social, } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="social"] `

type Data={
    socials:Social[]
}
export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data>){
    try{
        const socials= await sanityClient.fetch(query);
        return res.status(200).json({socials});
    
    
       } catch(err) { console.log(err)};
}