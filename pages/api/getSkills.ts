
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="skill"] `

type Data={
    skills:Skill[]
}
export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data>){
    try{
        const skills= await sanityClient.fetch(query);
        return res.status(200).json({skills});
    
    
       } catch(err) { console.log(err)};
}