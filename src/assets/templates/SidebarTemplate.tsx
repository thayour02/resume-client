import { Mail, Phone, MapPin, Link, Globe, User } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const SidebarTemplate = ({ data, accentColor }: TemplateProps) => {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800 flex min-h-[800px]">
            {/* Sidebar */}
            <div className="w-1/3 p-6" style={{ backgroundColor: accentColor }}>
                {/* Profile */}
                <div className="text-center mb-8">
                    {data.personal_info?.image ? (
                        <img 
                            src={typeof data.personal_info.image === 'string' ? data.personal_info.image : URL.createObjectURL(data.personal_info.image)}
                            alt="Profile" 
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
                        />
                    ) : (
                        <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-white/20 flex items-center justify-center">
                            <User className="w-12 h-12 text-white" />
                        </div>
                    )}
                    <h1 className="text-2xl font-bold text-white mb-2">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-white/90 text-sm">{data.personal_info.profession}</p>
                    )}
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                    <h3 className="text-white font-semibold mb-3">Contact</h3>
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Mail className="w-4 h-4" />
                            <span className="break-all">{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Phone className="w-4 h-4" />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Link className="w-4 h-4" />
                            <span className="break-all">{data.personal_info.linkedin}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                            <Globe className="w-4 h-4" />
                            <span className="break-all">{data.personal_info.website}</span>
                        </div>
                    )}
                </div>

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <div>
                        <h3 className="text-white font-semibold mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-white/20 text-white text-xs rounded"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Professional Summary */}
                {data.professional_summary && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4" style={{ color: accentColor }}>
                            Professional Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: accentColor }}>
                            Experience
                        </h2>
                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                                            <p className="font-medium" style={{ color: accentColor }}>{exp.company}</p>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: accentColor }}>
                            Education
                        </h2>
                        <div className="space-y-4">
                            {data.education.map((edu, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="font-medium" style={{ color: accentColor }}>{edu.institution}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-600">
                                        <span>{formatDate(edu.graduation_date)}</span>
                                        {edu.gpa && <span>GPA: {edu.gpa}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Languages */}
                {data.languages && data.languages.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: accentColor }}>
                            Languages
                        </h2>
                        <div className="space-y-2">
                            {data.languages.map((lang, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="font-medium text-gray-800">{lang.language}</span>
                                    <span className="text-sm text-gray-600">{lang.proficiency}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6" style={{ color: accentColor }}>
                            Projects
                        </h2>
                        <div className="space-y-4">
                            {data.project.map((proj, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold text-gray-900">{proj.name}</h3>
                                    {proj.type && (
                                        <span className="text-sm text-gray-600">{proj.type}</span>
                                    )}
                                    {proj.description && (
                                        <p className="text-gray-700 leading-relaxed mt-2">{proj.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default SidebarTemplate;
