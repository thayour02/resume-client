import type { Resume } from "../assets/utils";
import ModernTemplate from "../assets/templates/ModernTemplate";
import ClassicTemplate from "../assets/templates/ClassicTemplate";
import MinimalImageTemplate from "../assets/templates/MinimalImageTemplate";
import MinimalTemplate from "../assets/templates/MinimalTemplate";
import ExecutiveTemplate from "../assets/templates/ExecutiveTemplate";
import CreativeTemplate from "../assets/templates/CreativeTemplate";
import TimelineTemplate from "../assets/templates/TimelineTemplate";
import CompactTemplate from "../assets/templates/CompactTemplate";
import TwoColumnTemplate from "../assets/templates/TwoColumnTemplate";
import BoldTemplate from "../assets/templates/BoldTemplate";
import SidebarTemplate from "../assets/templates/SidebarTemplate";
import ElegantTemplate from "../assets/templates/ElegantTemplate";
import TechTemplate from "../assets/templates/TechTemplate";
import AcademicTemplate from "../assets/templates/AcademicTemplate";


type previewsProps = {
template: string,
data:Resume,
accent_color:string,
classes:string
}

const ResumePreview = ({template,data,accent_color,classes}:previewsProps) => {
    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accent_color} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accent_color} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accent_color} />;
            case "executive":
                return <ExecutiveTemplate data={data} accentColor={accent_color} />;
            case "creative":
                return <CreativeTemplate data={data} accentColor={accent_color} />;
            case "timeline":
                return <TimelineTemplate data={data} accentColor={accent_color} />;
            case "compact":
                return <CompactTemplate data={data} accentColor={accent_color} />;
            case "two-column":
                return <TwoColumnTemplate data={data} accentColor={accent_color} />;
            case "bold":
                return <BoldTemplate data={data} accentColor={accent_color} />;
            case "sidebar":
                return <SidebarTemplate data={data} accentColor={accent_color} />;
            case "elegant":
                return <ElegantTemplate data={data} accentColor={accent_color} />;
            case "tech":
                return <TechTemplate data={data} accentColor={accent_color} />;
            case "academic":
                return <AcademicTemplate data={data} accentColor={accent_color} />;
            default:
                return <ClassicTemplate data={data} accentColor={accent_color} />;
        }
    }


  
        
    return (
        <div className="w-full bg-gray-100">
            <div id="resume-preview" 
            className={`border border-gray-200` + classes }>
                {renderTemplate()}
            </div>
        </div>

    )
}

export default ResumePreview