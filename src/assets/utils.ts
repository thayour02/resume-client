import { Briefcase, FileText, FolderCheckIcon, FolderClockIcon, GraduationCap, Sparkles,User,Mail,Phone,Map,BriefcaseBusiness,Link,Globe } from "lucide-react";

export type Resume = {
    id: string;
    title: string;
    personal_info: {
        full_name?: string;
        email?: string;
        phone?: string;
        location?: string;
        profession?: string;
        linkedin?: string;
        website?: string;
        image?: string | File;
    };
    professional_summary?: string;
    experience: Array<{
        position: string;
        company: string;
        start_date: string;
        end_date?: string;
        is_current?: boolean;
        description?: string;
    }>;
    education: Array<{
        degree: string;
        field?: string;
        institution: string;
        graduation_date: string;
        gpa?: string;
    }>;
    project: Array<{
        name: string;
        description?: string;
        type?: string;
    }>;
    skills: string[];
    template: "classic" | "modern" | "minimal" | "minimal-image" | "creative" | "executive" | "timeline" | "two-column" | "compact" | "sidebar" | "elegant" | "tech" | "academic";
    accent_color: string;
    public: boolean;
}

export const dummyData: Resume[] = [
    {
        id: "tayo",
        title: "Engineer",
        personal_info: {
            full_name: "Temitayo",
            email: "tayo@gmail.com",
            phone: "08064675460",
            location: "Nigeria",
            profession: "Software engineer",
            linkedin: "tay.com",
            website: "tayo.com",
            image: undefined
        },
        professional_summary: "well oriented",
        experience: [],
        education: [],
        project: [],
        skills: [],
        template: "classic",
        accent_color: "#3B82F6",
        public: false
    }
]



export type Section = {
    id: string,
    name:string,
    icon:any
}

export const section : Section[] = [
    {id:"personal", name:"Perosnal Info", icon: User},
    {id:"summary", name:"summary", icon: FileText},
    {id:"experience", name:"experience", icon: Briefcase},
    {id:"education", name:"education", icon: GraduationCap},
    {id:"project", name:"project", icon:    FolderClockIcon},
    {id:"skills", name:"skills", icon: Sparkles}
]


export type PersonalInfoField = "full_name" | "email" | "phone" | "location" | "profession" | "linkedin" | "website";

export const field = [
    {key: "full_name" as PersonalInfoField, label:"Full Name", icon:User, type:"text", required:true},
    {key: "email" as PersonalInfoField, label:"Email", icon:Mail, type:"text", required:true},
    {key: "phone" as PersonalInfoField, label:"Phone Number", icon:Phone, type:"tel", required:true},
    {key: "location" as PersonalInfoField, label:"Location", icon:Map, type:"text", required:true},
    {key: "profession" as PersonalInfoField, label:"Profession", icon:BriefcaseBusiness, type:"text", required:true},
    {key: "linkedin" as PersonalInfoField, label:"LinkedIn URL", icon:Link, type:"url"},
    {key: "website" as PersonalInfoField, label:"Website/Portfolio URL", icon:Globe, type:"url"},
]