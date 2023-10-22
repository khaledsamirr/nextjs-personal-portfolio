
import { sanityClient } from "@/sanity";
import { Project, } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="project"]{
        ...,
        technologies[]->
    } `;

type Data={
    projects:Project[]
}
export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data>){
    try{
        const projects= await sanityClient.fetch(query);
        return res.status(200).json({projects});
    
    
       } catch(err) { console.log(err)};
}