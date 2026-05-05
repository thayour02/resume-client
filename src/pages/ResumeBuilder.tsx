import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { dummyData, section } from "../assets/utils";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Eye, EyeOff, Share2Icon } from "lucide-react";
import type { Resume } from "../assets/utils"
import Personal from "../components/p_info";
import ResumePreview from "../components/resumePreview";
import { TemplateSelector } from "../components/templateselector";
import { Color } from "../components/colorPicker";
import Summary from "../components/summmary";
import Experience from "../components/experience";
import Education from "../components/education";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Languages from "../components/languages";


const templates = [
    {
        id: "classic",
        name: 'Classic',
        description: 'Traditional professional layout'
    },
    {
        id: "minimal",
        name: 'Minimal',
        description: 'Clean and simple design'
    },
    {
        id: "minimal-image",
        name: 'Minimal Image',
        description: 'Minimal with profile photo'
    },
    {
        id: "modern",
        name: 'Modern',
        description: 'Contemporary sleek design'
    },
    {
        id: "executive",
        name: 'Executive',
        description: 'Elegant corporate style'
    },
    {
        id: "creative",
        name: 'Creative',
        description: 'Bold artistic layout'
    },
    {
        id: "timeline",
        name: 'Timeline',
        description: 'Career journey focused'
    },
    {
        id: "compact",
        name: 'Compact',
        description: 'Dense single-page layout'
    },
    {
        id: "two-column",
        name: 'Two Column',
        description: 'Sidebar with main content'
    },
    {
        id: "bold",
        name: 'Bold',
        description: 'Dark theme high impact'
    },
    {
        id: "sidebar",
        name: 'Sidebar Pro',
        description: 'Professional sidebar layout'
    },
    {
        id: "elegant",
        name: 'Elegant',
        description: 'Sophisticated typography focus'
    },
    {
        id: "tech",
        name: 'Tech Modern',
        description: 'Clean tech industry style'
    },
    {
        id: "academic",
        name: 'Academic',
        description: 'Research and education focused'
    },
];


export const ResumeBuild = () => {
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


    const [activeSectionIndex, setActiveSectionIndex] = useState(0)
    const [removeBackground, setRemoveBackground] = useState(false)

    const activesection = section[activeSectionIndex]
    const resumeVisibility = () => {
        setResumeData({ ...resumeData, public: !resumeData.public })
    }

    const shareReume = () => {
        const frontend = window.location.href.split('/app/')[0]
        const resumeUrl = frontend + '/view' + resumeId
        if (navigator.share) {
            navigator.share({
                title: resumeData.title,
                url: resumeUrl
            })
        } else {
            alert("Share not supported")
        }

    }

    const downloadResume = () => {
        // Get the resume preview element
        const resumeElement = document.getElementById('resume-preview');
        if (!resumeElement) {
            alert('Resume preview not found');
            return;
        }

        // Clone the resume content
        const resumeClone = resumeElement.cloneNode(true) as HTMLElement;
        
        // Create a new container for printing
        const printContainer = document.createElement('div');
        printContainer.id = 'print-container';
        printContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 999999;
            padding: 20px;
            box-sizing: border-box;
        `;
        
        // Clean up the cloned content
        resumeClone.style.cssText = `
            background: white !important;
            border: none !important;
            max-width: 100%;
            margin: 0 auto;
        `;
        
        // Remove any borders and backgrounds from child elements
        const allElements = resumeClone.querySelectorAll('*');
        allElements.forEach(el => {
            const element = el as HTMLElement;
            if (element.style.background) {
                element.style.background = 'white';
            }
            if (element.style.backgroundColor) {
                element.style.backgroundColor = 'white';
            }
        });
        
        printContainer.appendChild(resumeClone);
        document.body.appendChild(printContainer);
        
        // Hide all other content
        const originalContent = document.body.children;
        Array.from(originalContent).forEach(child => {
            if (child.id !== 'print-container') {
                (child as HTMLElement).style.display = 'none';
            }
        });
        
        // Trigger print
        window.print();
        
        // Restore original content
        setTimeout(() => {
            document.body.removeChild(printContainer);
            Array.from(originalContent).forEach(child => {
                (child as HTMLElement).style.display = '';
            });
        }, 100);
    }

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="flex items-center justify-between mt-8 mx-24">
                <div className="flex items-center space-x-2">
                    <ArrowLeft className="w-4 h-4 text-gray-500" />
                    <Link to={'/app'} className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"> Back to Dashboard
                    </Link>
                </div>


            </div>


            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left side - form */}
                    <div className="lg:col-span-2">
                        {/* Progress indicator */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 mb-6">
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
                                            className="flex items-center gap-2 px-4 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                            disabled={activeSectionIndex === 0}
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            Previous
                                        </button>
                                    )}
                                    <button
                                        onClick={() => setActiveSectionIndex(prevIndex => Math.min(prevIndex + 1, section.length - 1))}
                                        className={`flex items-center gap-2 px-4 py-1 text-sm font-medium rounded-lg transition-colors ${activeSectionIndex === section.length - 1
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
                           {/* Section Navigation */}
                                <div className="grid grid-cols-4 gap-2 mb-4">
                                    {section.map((sectionItem, index) => (
                                        <button
                                            key={sectionItem.id}
                                            onClick={() => setActiveSectionIndex(index)}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors text-xs ${index === activeSectionIndex
                                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                }`}
                                        >
                                            <sectionItem.icon className="w-4 h-4 flex-shrink-0" />
                                            <span className="font-medium truncate">{sectionItem.name}</span>
                                        </button>
                                    ))}
                                </div>

                        {/* {template selection} */}
                        <div className="flex items-center gap-2 mb-2">
                            <TemplateSelector
                                onTemplateChange={(template) => setResumeData(prev => ({ ...prev, template: template.id as Resume['template'] }))}
                                selectedTemplate={resumeData.template ? templates.find(t => t.id === resumeData.template) : undefined}
                            />

                            <Color selectedColor={{ name: "custom", value: resumeData.accent_color }}
                                onChange={(color) => setResumeData(prev => ({ ...prev, accent_color: color.value as Resume['accent_color'] }))}
                            />
                         
                        </div>
                        {/* Section Title */}
                        <div className="mt- space-y-1 px-2">
                            <h2 className="text-2xl font-bold text-gray-900 ">
                                {activesection.name.toUpperCase()}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                {activesection.id === 'personal' && 'Add your personal information to get started'}
                            </p>
                        </div>

                        {/* Form section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            {activesection.id === 'personal' && (
                                <Personal
                                    data={resumeData?.personal_info}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))}
                                    removeBackground={removeBackground}
                                    setRemoveBackground={setRemoveBackground}
                                />
                            )}
                            {activesection.id === 'summary' && (
                                <Summary
                                    data={resumeData?.professional_summary}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, professional_summary: data }))}
                                />
                            )}

                            {activesection.id === 'experience' && (
                                <Experience
                                    data={resumeData?.experience}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, experience: data }))}
                                />
                            )}

                            {activesection.id === 'education' && (
                                <Education
                                    data={resumeData?.education}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, education: data }))}
                                />
                            )}
                            {activesection.id === 'project' && (
                                <Projects
                                    data={resumeData?.project}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, project: data }))}
                                />
                            )}
                            {activesection.id === 'skills' && (
                                <Skills
                                    data={resumeData?.skills}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, skills: data }))}
                                />
                            )}
                            {activesection.id === 'languages' && (
                                <Languages
                                    data={resumeData?.languages}
                                    onChange={(data) => setResumeData(prev => ({ ...prev, languages: data }))}
                                />
                            )}

                        {/* save button */}

                              <button  className="px-6 mt-5 flex items-center gap-2 py-4 text-md border-purple-600 font-medium bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors cursor-pointer">
                            Save Changes
                        </button>
                        </div>

                      
                    </div>


                    {/* Right side - Preview */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-6">
                            {/* share page */}
                            <div className="relative w-full">
                                <div className="absolute top-0 right-0 flex items-center justify-end space-x-2 -mt-10 mb-3">
                                    {
                                        resumeData.public && (
                                            <button onClick={shareReume} className="px-4 flex items-center gap-2 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded hover:bg-purple-200 transition-colors cursor-pointer">
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
                          <div id="resume-preview">
                              <Link to={`/preview/${resumeData.id}`}>
                                <ResumePreview data={resumeData}
                                    template={resumeData.template}
                                    accent_color={resumeData.accent_color} classes="" />
                            </Link>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResumeBuild