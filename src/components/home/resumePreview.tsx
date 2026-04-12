import type { Resume } from "@/assets/utils";
import { useState } from "react";
import ModernTemplate from "@/assets/templates/ModernTemplate";
import ClassicTemplate from "@/assets/templates/ClassicTemplate";
import MinimalImageTemplate from "@/assets/templates/MinimalImageTemplate";
import MinimalTemplate from "@/assets/templates/MinimalTemplate";


type Previews = {
template: string,
data:Resume,
accent_color:string,
classes:string
}

const Preview = ({template,data,accent_color,classes}:Previews) => {

    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accent_color} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accent_color} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accent_color} />;
            default:
                return <ClassicTemplate data={data} accentColor={accent_color} />;
        }
    }


  
        
    return (
        <div className="bg-white rounded-xl ">
            <div className={`aspect-[3/4] bg-white rounded-lg border border-gray-200 overflow-auto ${classes}`}>
                {renderTemplate()}
            </div>
            <style >
                {
                    `
                    @page{
                    size:letter;
                    margin:0;
                    }
                    @media print {
                    html}
                    `
                }
            </style>
        </div>

    )
}

export default Preview