import { Mail, Phone, MapPin, Link, Globe } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const ExecutiveTemplate = ({ data, accentColor }: TemplateProps) => {
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
            {/* Elegant Header with Side Accent */}
            <div className="flex">
                <div className="w-2" style={{ backgroundColor: accentColor }}></div>
                <header className="flex-1 p-8 bg-gray-900 text-white">
                    <h1 className="text-4xl font-bold tracking-tight mb-2">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-lg font-light tracking-widest uppercase mb-4" style={{ color: accentColor }}>
                            {data.personal_info.profession}
                        </p>
                    )}
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        {data.personal_info?.email && (
                            <div className="flex items-center gap-2">
                                <Mail className="size-4" style={{ color: accentColor }} />
                                <span>{data.personal_info.email}</span>
                            </div>
                        )}
                        {data.personal_info?.phone && (
                            <div className="flex items-center gap-2">
                                <Phone className="size-4" style={{ color: accentColor }} />
                                <span>{data.personal_info.phone}</span>
                            </div>
                        )}
                        {data.personal_info?.location && (
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4" style={{ color: accentColor }} />
                                <span>{data.personal_info.location}</span>
                            </div>
                        )}
                        {data.personal_info?.linkedin && (
                            <a target="_blank" href={data.personal_info.linkedin} className="flex items-center gap-2 hover:text-white">
                                <Link className="size-4" style={{ color: accentColor }} />
                                <span className="text-xs">LinkedIn</span>
                            </a>
                        )}
                        {data.personal_info?.website && (
                            <a target="_blank" href={data.personal_info.website} className="flex items-center gap-2 hover:text-white">
                                <Globe className="size-4" style={{ color: accentColor }} />
                                <span className="text-xs">Portfolio</span>
                            </a>
                        )}
                    </div>
                </header>
            </div>

            <div className="p-8">
                {/* Executive Summary */}
                {data.professional_summary && (
                    <section className="mb-8">
                        <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: accentColor }}>
                            Executive Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify border-l-4 pl-4" style={{ borderColor: accentColor }}>
                            {data.professional_summary}
                        </p>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-6" style={{ color: accentColor }}>
                            Professional Experience
                        </h2>

                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                                            <p className="font-semibold" style={{ color: accentColor }}>{exp.company}</p>
                                        </div>
                                        <div className="text-sm text-gray-500 font-medium">
                                            {formatDate(exp.start_date)} — {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <div className="text-gray-600 leading-relaxed mt-2 whitespace-pre-line text-sm">
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-8">
                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <section>
                            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: accentColor }}>
                                Education
                            </h2>

                            <div className="space-y-4">
                                {data.education.map((edu, index) => (
                                    <div key={index}>
                                        <h3 className="font-bold text-gray-900 text-sm">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{edu.institution}</p>
                                        <p className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: accentColor }}>
                                Core Competencies
                            </h2>

                            <div className="grid grid-cols-2 gap-2">
                                {data.skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section className="mt-8">
                        <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: accentColor }}>
                            Key Projects
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            {data.project.map((p, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded">
                                    <h3 className="font-bold text-gray-900 text-sm mb-1">{p.name}</h3>
                                    {p.description && (
                                        <p className="text-gray-600 text-xs">{p.description}</p>
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

export default ExecutiveTemplate;
