import { Mail, Phone, MapPin, Link, Globe, GraduationCap, Award, BookOpen } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const AcademicTemplate = ({ data, accentColor }: TemplateProps) => {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800">
            {/* Academic Header */}
            <header className="border-b-4" style={{ borderColor: accentColor }}>
                <div className="px-8 py-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-serif text-gray-900 mb-3">
                            {data.personal_info?.full_name || "Your Name"}
                        </h1>
                        {data.personal_info?.profession && (
                            <p className="text-lg text-gray-600 italic mb-4">{data.personal_info.profession}</p>
                        )}
                        
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span>{data.personal_info.email}</span>
                                </div>
                            )}
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{data.personal_info.phone}</span>
                                </div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{data.personal_info.location}</span>
                                </div>
                            )}
                            {data.personal_info?.linkedin && (
                                <div className="flex items-center gap-2">
                                    <Link className="w-4 h-4" />
                                    <span className="break-all">{data.personal_info.linkedin}</span>
                                </div>
                            )}
                            {data.personal_info?.website && (
                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    <span className="break-all">{data.personal_info.website}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className="px-8 py-8">
                {/* Education First for Academic CV */}
                {data.education && data.education.length > 0 && (
                    <section className="mb-10">
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap className="w-5 h-5" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-serif font-bold text-gray-900">Education</h2>
                        </div>
                        <div className="space-y-6">
                            {data.education.map((edu, index) => (
                                <div key={index} className="border-l-4 pl-6" style={{ borderColor: accentColor }}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {edu.degree} {edu.field && `in ${edu.field}`}
                                            </h3>
                                            <p className="text-gray-700 font-medium">{edu.institution}</p>
                                            {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">
                                            {formatDate(edu.graduation_date)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Research Interests / Summary */}
                {data.professional_summary && (
                    <section className="mb-10">
                        <div className="flex items-center gap-2 mb-6">
                            <BookOpen className="w-5 h-5" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-serif font-bold text-gray-900">Research Interests</h2>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-700 leading-relaxed font-serif">{data.professional_summary}</p>
                        </div>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Award className="w-5 h-5" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-serif font-bold text-gray-900">Professional Experience</h2>
                        </div>
                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                                            <p className="font-medium text-gray-700">{exp.company}</p>
                                        </div>
                                        <div className="text-sm text-gray-600 font-medium">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <div className="text-gray-700 leading-relaxed pl-4 border-l-2 border-gray-300">
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects as Research/Publications */}
                {data.project && data.project.length > 0 && (
                    <section className="mb-10">
                        <div className="flex items-center gap-2 mb-6">
                            <BookOpen className="w-5 h-5" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-serif font-bold text-gray-900">Publications & Projects</h2>
                        </div>
                        <div className="space-y-4">
                            {data.project.map((proj, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                                        {proj.name}
                                    </h3>
                                    {proj.type && (
                                        <span className="text-sm text-gray-600 italic">{proj.type}</span>
                                    )}
                                    {proj.description && (
                                        <p className="text-gray-700 leading-relaxed mt-2 font-serif">
                                            {proj.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <section>
                        <div className="flex items-center gap-2 mb-6">
                            <Award className="w-5 h-5" style={{ color: accentColor }} />
                            <h2 className="text-2xl font-serif font-bold text-gray-900">Skills & Expertise</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {data.skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
                                    <span className="text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default AcademicTemplate;
