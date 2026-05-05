import { Mail, Phone, MapPin, Link, Globe, Code } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const TechTemplate = ({ data, accentColor }: TemplateProps) => {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="bg-white border-b-4" style={{ borderColor: accentColor }}>
                <div className="px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {data.personal_info?.full_name || "Your Name"}
                            </h1>
                            {data.personal_info?.profession && (
                                <p className="text-lg text-gray-600 font-medium">{data.personal_info.profession}</p>
                            )}
                        </div>
                        <div className="text-right space-y-1">
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                                    <Mail className="w-4 h-4" />
                                    <span>{data.personal_info.email}</span>
                                </div>
                            )}
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                                    <Phone className="w-4 h-4" />
                                    <span>{data.personal_info.phone}</span>
                                </div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                                    <MapPin className="w-4 h-4" />
                                    <span>{data.personal_info.location}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className="px-8 py-6">
                {/* Skills Section - Tech focused */}
                {data.skills && data.skills.length > 0 && (
                    <section className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Code className="w-5 h-5" style={{ color: accentColor }} />
                            <h2 className="text-xl font-bold text-gray-900">Technical Skills</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {data.skills.map((skill, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                                    <span className="text-sm font-medium text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Professional Summary */}
                {data.professional_summary && (
                    <section className="mb-8 bg-white p-6 rounded-lg border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Summary</h2>
                        <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Experience</h2>
                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                                            <p className="font-medium" style={{ color: accentColor }}>{exp.company}</p>
                                        </div>
                                        <div className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600 font-mono">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <div className="text-gray-700 leading-relaxed font-mono text-sm bg-gray-50 p-4 rounded border-l-4" style={{ borderColor: accentColor }}>
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Projects</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {data.project.map((proj, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-lg font-bold text-gray-900">{proj.name}</h3>
                                        {proj.type && (
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">
                                                {proj.type}
                                            </span>
                                        )}
                                    </div>
                                    {proj.description && (
                                        <p className="text-gray-700 leading-relaxed text-sm">{proj.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Education</h2>
                        <div className="space-y-4">
                            {data.education.map((edu, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {edu.degree} {edu.field && `in ${edu.field}`}
                                            </h3>
                                            <p className="font-medium text-gray-700">{edu.institution}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-600 font-mono">
                                                {formatDate(edu.graduation_date)}
                                            </div>
                                            {edu.gpa && (
                                                <div className="text-sm text-gray-600 font-mono">GPA: {edu.gpa}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default TechTemplate;
