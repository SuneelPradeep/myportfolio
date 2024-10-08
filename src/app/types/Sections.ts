import { IconType } from "react-icons";

export enum Section {
"AboutMe" = 'about-me',
// "Achievements" = 'achievements',
// "Blog" = "blog",
"Certifications" = "certifications",
"Education" = "education",
"Languages" = "languages",
// "Philantrophy" = "philantrophy",
"Projects" = "projects",
"Skills" = "skills",
"WorkExperience" = "work-experience",
"Photography" = "photography",
// "Music" = "music",
// "Designs" = "designs",
"Resume" = "resume",
"Contact" = "contact",
// "AboutRotW" = "aboutrotw",
}

export type SectionMap = Record<Section, {icon : IconType,title:string}>

export type SectionArray ={
    id: Section;
    title:string;
    icon:IconType
}[]

export type Article={
    id: number;
    title: string;
    description: string;
    url: string;
    public_reactions_count: number;
    social_image: string;
    published_at: string;
    tag_list: string[];
      };
    
export type Project = {
    id: number;
    image: string;
    name: string;
    summary: string;
    tags: string[];
    link?: {
        url?: string;
        github?: string;
};
};
export type Certificate = {
  id : number;
  name : string;
  date : string;
  issuer : string;
  summary? : string;
  link? : string;
}


export type Achievement = {
    id: number;
    title: string;
    subtitle: string;
  };
  
  export type Certification = {
    id: number;
    title: string;
    subtitle: string;
  };
  
  export type Philantrophy = {
    id: number;
    title: string;
    description: string;
  };
  
  export type InstagramMedia = {
    id: string;
    media_url: string;
    permalink: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "REELS";
  };
  
  export type DribbbleShot = {
    id: number;
    title: string;
    html_url: string;
    images: {
      hidpi: string;
    };
  };
