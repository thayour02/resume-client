import { Mail, Phone, MapPin, Link, Globe, Calendar } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const TimelineTemplate = ({ data, accentColor }: TemplateProps) => {
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
            {/* Header with Timeline Aesthetic */}
            <header className="p-8 border-b-4" style={{ borderColor: accentColor }}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-lg mb-4" style={{ color: accentColor }}>
                            {data.personal_info.profession}
                        </p>
                    )}
                    
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                        {data.personal_info?.email && (
                            <div className="flex items-center gap-1">
                                <Mail className="size-4" style={{ color: accentColor }} />
                                <span>{data.personal_info.email}</span>
                            </div>
                        )}
                        {data.personal_info?.phone && (
                            <div className="flex items-center gap-1">
                                <Phone className="size-4" style={{ color: accentColor }} />
                                <span>{data.personal_info.phone}</span>
                            </div>
                        )}
                        {data.personal_info?.location && (
                            <div className="flex items-center gap-1">
                                <MapPin className="size-4" style={{ color: accentColor }} />
                                <span>{data.personal_info.location}</span>
                            </div>
                        )}
                        {data.personal_info?.linkedin && (
                            <a target="_blank" href={data.personal_info.linkedin} className="flex items-center gap-1 hover:underline">
                                <Link className="size-4" style={{ color: accentColor }} />
                                <span>LinkedIn</span>
                            </a>
                        )}
                        {data.personal_info?.website && (
                            <a target="_blank" href={data.personal_info.website} className="flex items-center gap-1 hover:underline">
                                <Globe className="size-4" style={{ color: accentColor }} />
                                <span>Portfolio</span>
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="p-8">
                {/* Professional Summary */}
                {data.professional_summary && (
                    <section className="mb-8 text-center max-w-2xl mx-auto">
                        <p className="text-gray-600 leading-relaxed italic">"{data.professional_summary}"</p>
                    </section>
                )}

                {/* Experience Timeline */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-center text-sm font-bold tracking-widest uppercase mb-8" style={{ color: accentColor }}>
                            Career Timeline
                        </h2>

                        <div className="relative">
                            {/* Central Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5" style={{ backgroundColor: accentColor }}></div>

                            <div className="space-y-8">
                                {data.experience.map((exp, index) => (
                                    <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Timeline Node */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10" style={{ backgroundColor: accentColor }}></div>
                                        
                                        {/* Content Card */}
                                        <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                                                    <Calendar className="size-3" />
                                                    {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                                </div>
                                                <h3 className="font-bold text-gray-900">{exp.position}</h3>
                                                <p className="text-sm font-medium" style={{ color: accentColor }}>{exp.company}</p>
                                                {exp.description && (
                                                    <p className="text-xs text-gray-600 mt-2 whitespace-pre-line">{exp.description}</p>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Spacer */}
                                        <div className="w-5/12"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Education Timeline */}
                {data.education && data.education.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-center text-sm font-bold tracking-widest uppercase mb-6" style={{ color: accentColor }}>
                            Education
                        </h2>

                        <div className="flex justify-center gap-6 flex-wrap">
                            {data.education.map((edu, index) => (
                                <div key={index} className="text-center p-4 border-2 rounded-lg" style={{ borderColor: accentColor }}>
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: accentColor }}>
                                        {edu.institution.charAt(0)}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-sm" style={{ color: accentColor }}>{edu.institution}</p>
                                    <p className="text-xs text-gray-500 mt-1">{formatDate(edu.graduation_date)}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-center text-sm font-bold tracking-widest uppercase mb-4" style={{ color: accentColor }}>
                            Skills & Expertise
                        </h2>

                        <div className="flex flex-wrap justify-center gap-3">
                            {data.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 text-sm rounded-full text-white"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section>
                        <h2 className="text-center text-sm font-bold tracking-widest uppercase mb-6" style={{ color: accentColor }}>
                            Projects
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            {data.project.map((p, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                                    <h3 className="font-bold text-gray-900">{p.name}</h3>
                                    {p.description && (
                                        <p className="text-sm text-gray-600 mt-1">{p.description}</p>
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

export default TimelineTemplate;
