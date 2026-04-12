import { useEffect, useState } from "react"
import { data, Link, useParams } from "react-router-dom";
import { dummyData, section } from "@/assets/utils";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { Resume, Section } from "@/assets/utils"
import Personal from "@/components/home/p_info";
import Preview from "@/components/home/resumePreview";
import { TemplateSelector } from "@/components/templateselector";

const templates = [
    {
        id: "classic",
        name: 'Classic',
        description: 'A clean and professional template'
    },
    {
        id: "minimal",
        name: 'Minimal',
        description: 'A clean and professional template'
    },
    {
        id: "minimal-image",
        name: 'Minimal Image',
        description: 'A clean and professional template'
    },
    {
        id: "modern",
        name: 'Modern',
        description: 'A modern and sleek template'
    },
];


const ResumeBuilder = () => {
    const [resumeData, setResumeData] = useState<Resume>({
        id: "",
        title: "",
        personal_info: {},
        experience: [],
        education: [],
        project: [],
        skills: [],
        template: "classNameic",
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


    const [activeSectionIndex, setActiveSectionIndex] = useState(0)
    const [removeBackground, setRemoveBackground] = useState(false)

    const activesection = section[activeSectionIndex]

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex items-center space-x-2 px-6 py-4 bg-white border-b border-gray-200">
                <Link to='/' type="button" aria-label="Home" className="text-gray-600 hover:text-gray-900 transition-colors">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z" fill="#475569" stroke="#475569" strokeWidth=".094" />
                    </svg>
                </Link>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1" />
                </svg>

                <div className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4 text-gray-500" />
                    <Link to={'/app'} className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors">Dashboard
                    </Link>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* left side - form */}
                    <div className="lg:col-span-1">
                        {/* Progress indicator */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                                <div 
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
                                    style={{ width: `${((activeSectionIndex + 1) / section.length) * 100}%` }} 
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                    Step {activeSectionIndex + 1} of {section.length}
                                </span>
                                <div className="flex items-center gap-2">
                                    {activeSectionIndex !== 0 && (
                                        <button 
                                            onClick={() => setActiveSectionIndex(prevIndex => Math.max(prevIndex - 1, 0))}
                                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                            disabled={activeSectionIndex === 0}
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Previous
                                        </button>
                                    )}
                                    <button 
                                        onClick={() => setActiveSectionIndex(prevIndex => Math.min(prevIndex + 1, section.length - 1))}
                                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                            activeSectionIndex === section.length - 1 
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                        disabled={activeSectionIndex === section.length - 1}
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                        </div>

                        {/* {template selection} */}
                        <div>
                            <TemplateSelector 
                                onTemplateChange={(template) => setResumeData(prev => ({...prev, template: template.id as Resume['template']}))}
                                selectedTemplate={resumeData.template ? templates.find(t => t.id === resumeData.template) : undefined}
                            />
                        </div>
                        {/* Section Title */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {activesection.name}
                            </h2>
                            <p className="text-gray-600">
                                {activesection.id === 'personal' && 'Add your personal information to get started'}
                            </p>
                        </div>

                        {/* Form section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            {activesection.id === 'personal' && (
                                <Personal 
                                    data={resumeData?.personal_info} 
                                    onChange={(data) => setResumeData(prev => ({...prev, personal_info: data}))}
                                    removeBackground={removeBackground}
                                    setRemoveBackground={setRemoveBackground}
                                />
                            )}
                        </div>
                    </div>



                    {/* Right side - Preview */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-6">
                                <Preview data={resumeData} template={resumeData.template} accent_color={resumeData.accent_color} classes="" />
                            {/* Section Navigation */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sections</h3>
                                <div className="space-y-2">
                                    {section.map((sectionItem, index) => (
                                        <button
                                            key={sectionItem.id}
                                            onClick={() => setActiveSectionIndex(index)}
                                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                                                index === activeSectionIndex
                                                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        >
                                            <sectionItem.icon className="w-5 h-5" />
                                            <span className="text-sm font-medium">{sectionItem.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeBuilder