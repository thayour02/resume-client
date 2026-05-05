import { Mail, Phone, MapPin, Link, Globe, ArrowRight } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const BoldTemplate = ({ data, accentColor }: TemplateProps) => {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-gray-900 text-white min-h-full">
            {/* Bold Header */}
            <header className="p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: accentColor, transform: 'translate(30%, -30%)' }}></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: accentColor, transform: 'translate(-30%, 30%)' }}></div>
                
                <div className="relative z-10">
                    <h1 className="text-5xl font-black mb-2">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-2xl font-light" style={{ color: accentColor }}>
                            {data.personal_info.profession}
                        </p>
                    )}
                    
                    <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-400">
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
                                <span>LinkedIn</span>
                            </a>
                        )}
                        {data.personal_info?.website && (
                            <a target="_blank" href={data.personal_info.website} className="flex items-center gap-2 hover:text-white">
                                <Globe className="size-4" style={{ color: accentColor }} />
                                <span>Portfolio</span>
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className="px-10 pb-10">
                {/* Summary */}
                {data.professional_summary && (
                    <section className="mb-10 p-6 rounded-xl" style={{ backgroundColor: accentColor + '15' }}>
                        <p className="text-lg text-gray-300 leading-relaxed">{data.professional_summary}</p>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-10">
                        <h2 className="text-3xl font-black mb-6" style={{ color: accentColor }}>
                            Experience
                        </h2>

                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="p-6 bg-gray-800 rounded-xl">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-bold">{exp.position}</h3>
                                            <p className="font-medium" style={{ color: accentColor }}>{exp.company}</p>
                                        </div>
                                        <span className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </span>
                                    </div>
                                    {exp.description && (
                                        <p className="text-gray-400 whitespace-pre-line">{exp.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-black mb-4" style={{ color: accentColor }}>
                                Skills
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 text-sm font-medium rounded-lg"
                                        style={{ backgroundColor: accentColor, color: 'white' }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-black mb-4" style={{ color: accentColor }}>
                                Education
                            </h2>

                            <div className="space-y-4">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                                        <h3 className="font-bold">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p className="text-sm" style={{ color: accentColor }}>{edu.institution}</p>
                                        <p className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section className="mt-10">
                        <h2 className="text-2xl font-black mb-6" style={{ color: accentColor }}>
                            Projects
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {data.project.map((p, index) => (
                                <div key={index} className="p-5 bg-gray-800 rounded-xl border-l-4" style={{ borderColor: accentColor }}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <ArrowRight className="size-4" style={{ color: accentColor }} />
                                        <h3 className="font-bold">{p.name}</h3>
                                    </div>
                                    {p.description && (
                                        <p className="text-sm text-gray-400">{p.description}</p>
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

export default BoldTemplate;
