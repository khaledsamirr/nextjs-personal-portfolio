interface SanityBody{
    _createdAt: string;
    _id : string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset:{
        _ref: string;
        _type:"reference";
    }
}

export interface Social extends SanityBody {
    _type: "social";
    title:string;
    url: string;
}

export interface PageInfo extends SanityBody{
    _type:"pageInfo";
    address: string;
    backgroundInfo:string;
    role: string;
    email:string;
    name: string;
    phoneNum:string;
    profilePic: Image;
    kImage: Image;
    skills: Skills[]
    
}

export interface Technology extends SanityBody{
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}
export interface Skill extends SanityBody{
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}

export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage:Image;
    dataStarted:date;
    dateEnded:date;
    isCurrentlyWorkingHere: boolean;
    jobTitle:string;
    points:string[]
    technologies:Technology[]
}

export interface Project extends SanityBody{
    title:string;
    _type:"project";
    linkToBuild:string;
    image:Image;
    summary:string;
    technologies:Technology[]
}