
import { sanityClient } from "@/sanity";
import { Experience, } from "@/typings";
import type { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
    *[_type=="experience"]{
        ...,
        technologies[]->
    }`;

type Data={
    experiences:Experience[]
}
export default async function handler ( req: NextApiRequest, res: NextApiResponse<Data>){
   
   try{
    const experiences= await sanityClient.fetch(query);
   return  res.status(200).json({experiences});


   } catch(err) {console.log(err)};
}