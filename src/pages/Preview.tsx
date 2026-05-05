import { type Resume, dummyData } from "../assets/utils";
import ResumePreview from "../components/resumePreview";
import { Download, Eye, EyeOff, Share2Icon } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Preview = () => {
      const [resumeData, setResumeData] = useState<Resume>({
        id: "",
        title: "",
        personal_info: {},
        experience: [],
        education: [],
        project: [],
        skills: [],
        languages: [],
        template: "classic",
        accent_color: "#3B82F6",
        public: false
    });
    const { resumeId } = useParams()



    const existingResume = async () => {
        const resume = dummyData.find(resume => resume.id === resumeId)
        if (resume) {
            setResumeData(resume)
            document.title = resume.title
        }
    }
    useEffect(() => {
        existingResume()
    }, [])
const resumeVisibility = () => {
 setResumeData({...resumeData, public:!resumeData.public})
}

const shareResume = () => {
  const client = window.location.href.split("/app")[0]
  const url = client + "/view" + resumeId
  if(navigator.share){
    navigator.share({
        title:resumeData.title,
        url:url
    })
  }else {
    alert("cannot share resuming")
  }
}

const downloadResume = () => {
    window.print()
}


    
    return (
        <div className="bg-slate-100">
             {/* share page */}
                            <div className="relative w-full">
                                <div className="absolute top-0 right-0 flex items-center justify-end space-x-2 -mt-10 mb-3">
                                    {
                                        resumeData.public && (
                                            <button onClick={shareResume} className="px-4 flex items-center gap-2 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded hover:bg-purple-200 transition-colors cursor-pointer">
                                                <Share2Icon className="w-4 h-4" />
                                                share
                                            </button>
                                        )
                                    }
                                    <button onClick={resumeVisibility} className="px-6 flex items-center gap-2 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors cursor-pointer">
                                        {
                                            resumeData.public ? (
                                                <Eye className="w-4 h-4 mr-2" />
                                            ) : (
                                                <EyeOff className="w-4 h-4 mr-2" />
                                            )
                                        }
                                        {resumeData.public ? "Private" : "Public"}
                                    </button>

                                    <button onClick={downloadResume} className="px-6 flex items-center gap-2 py-1 text-sm font-medium bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors cursor-pointer">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download
                                    </button>
                                </div>
                            </div>
            <div className="max-w-3xl mx-auto py-10">
                <ResumePreview data={resumeData} template={resumeData.template} accent_color={resumeData.accent_color} classes="py-4 bg-white" />
            </div>
        </div>
    )
}

export default Preview