import { Mail, Phone, MapPin, Link, Globe } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const CompactTemplate = ({ data, accentColor }: TemplateProps) => {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800 text-sm">
            {/* Compact Header */}
            <header className="p-6 flex items-center justify-between border-b-2" style={{ borderColor: accentColor }}>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-sm" style={{ color: accentColor }}>{data.personal_info.profession}</p>
                    )}
                </div>
                
                <div className="text-right text-xs text-gray-600 space-y-1">
                    {data.personal_info?.email && (
                        <div className="flex items-center justify-end gap-1">
                            <Mail className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center justify-end gap-1">
                            <Phone className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center justify-end gap-1">
                            <MapPin className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    <div className="flex items-center justify-end gap-3">
                        {data.personal_info?.linkedin && (
                            <a target="_blank" href={data.personal_info.linkedin} className="flex items-center gap-1 hover:underline">
                                <Link className="size-3" style={{ color: accentColor }} />
                            </a>
                        )}
                        {data.personal_info?.website && (
                            <a target="_blank" href={data.personal_info.website} className="flex items-center gap-1 hover:underline">
                                <Globe className="size-3" style={{ color: accentColor }} />
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="p-6">
                {/* Summary - Compact */}
                {data.professional_summary && (
                    <section className="mb-4 pb-4 border-b border-gray-200">
                        <p className="text-gray-600 leading-relaxed">{data.professional_summary}</p>
                    </section>
                )}

                <div className="grid grid-cols-3 gap-6">
                    {/* Left Column - Experience */}
                    <div className="col-span-2">
                        {/* Experience */}
                        {data.experience && data.experience.length > 0 && (
                            <section className="mb-4">
                                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: accentColor, borderColor: accentColor }}>
                                    Experience
                                </h2>

                                <div className="space-y-3">
                                    {data.experience.map((exp, index) => (
                                        <div key={index}>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{exp.position}</h3>
                                                    <p className="text-xs" style={{ color: accentColor }}>{exp.company}</p>
                                                </div>
                                                <span className="text-xs text-gray-500 whitespace-nowrap">
                                                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                                </span>
                                            </div>
                                            {exp.description && (
                                                <p className="text-xs text-gray-600 mt-1 whitespace-pre-line">{exp.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Projects */}
                        {data.project && data.project.length > 0 && (
                            <section>
                                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: accentColor, borderColor: accentColor }}>
                                    Projects
                                </h2>

                                <div className="space-y-2">
                                    {data.project.map((p, index) => (
                                        <div key={index}>
                                            <h3 className="font-bold text-gray-900">{p.name}</h3>
                                            {p.description && (
                                                <p className="text-xs text-gray-600">{p.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column - Education & Skills */}
                    <div className="space-y-4">
                        {/* Education */}
                        {data.education && data.education.length > 0 && (
                            <section>
                                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: accentColor, borderColor: accentColor }}>
                                    Education
                                </h2>

                                <div className="space-y-2">
                                    {data.education.map((edu, index) => (
                                        <div key={index}>
                                            <h3 className="font-bold text-gray-900 text-xs">
                                                {edu.degree}
                                            </h3>
                                            {edu.field && <p className="text-xs text-gray-600">{edu.field}</p>}
                                            <p className="text-xs" style={{ color: accentColor }}>{edu.institution}</p>
                                            <p className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Skills */}
                        {data.skills && data.skills.length > 0 && (
                            <section>
                                <h2 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ color: accentColor, borderColor: accentColor }}>
                                    Skills
                                </h2>

                                <div className="flex flex-wrap gap-1">
                                    {data.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-0.5 text-xs rounded text-white"
                                            style={{ backgroundColor: accentColor }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompactTemplate;
