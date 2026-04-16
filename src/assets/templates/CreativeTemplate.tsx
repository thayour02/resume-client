import { Mail, Phone, MapPin, Link, Globe } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const CreativeTemplate = ({ data, accentColor }: TemplateProps) => {
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
            {/* Creative Asymmetric Header */}
            <div className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full" style={{ backgroundColor: accentColor, opacity: 0.1 }}></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full -mb-16 -ml-16" style={{ backgroundColor: accentColor, opacity: 0.2 }}></div>
                
                <header className="relative p-10">
                    <div className="flex items-end gap-6">
                        {data.personal_info?.image && typeof data.personal_info.image === 'string' && (
                            <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                                <img src={data.personal_info.image} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="flex-1">
                            <h1 className="text-5xl font-black tracking-tight" style={{ color: accentColor }}>
                                {data.personal_info?.full_name || "Your Name"}
                            </h1>
                            {data.personal_info?.profession && (
                                <p className="text-xl text-gray-600 mt-1 font-light">
                                    {data.personal_info.profession}
                                </p>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 mt-6 text-sm">
                        {data.personal_info?.email && (
                            <div className="flex items-center gap-2 text-gray-600">
                                <div className="p-2 rounded-full" style={{ backgroundColor: accentColor + '20' }}>
                                    <Mail className="size-4" style={{ color: accentColor }} />
                                </div>
                                <span>{data.personal_info.email}</span>
                            </div>
                        )}
                        {data.personal_info?.phone && (
                            <div className="flex items-center gap-2 text-gray-600">
                                <div className="p-2 rounded-full" style={{ backgroundColor: accentColor + '20' }}>
                                    <Phone className="size-4" style={{ color: accentColor }} />
                                </div>
                                <span>{data.personal_info.phone}</span>
                            </div>
                        )}
                        {data.personal_info?.location && (
                            <div className="flex items-center gap-2 text-gray-600">
                                <div className="p-2 rounded-full" style={{ backgroundColor: accentColor + '20' }}>
                                    <MapPin className="size-4" style={{ color: accentColor }} />
                                </div>
                                <span>{data.personal_info.location}</span>
                            </div>
                        )}
                        {data.personal_info?.linkedin && (
                            <a target="_blank" href={data.personal_info.linkedin} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <div className="p-2 rounded-full" style={{ backgroundColor: accentColor + '20' }}>
                                    <Link className="size-4" style={{ color: accentColor }} />
                                </div>
                                <span>LinkedIn</span>
                            </a>
                        )}
                        {data.personal_info?.website && (
                            <a target="_blank" href={data.personal_info.website} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <div className="p-2 rounded-full" style={{ backgroundColor: accentColor + '20' }}>
                                    <Globe className="size-4" style={{ color: accentColor }} />
                                </div>
                                <span>Portfolio</span>
                            </a>
                        )}
                    </div>
                </header>
            </div>

            <div className="p-10 pt-6">
                {/* About Me */}
                {data.professional_summary && (
                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                            <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">{data.professional_summary}</p>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
                        </div>

                        <div className="space-y-8">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="relative pl-8">
                                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }}></div>
                                    <div className="absolute left-[5px] top-6 bottom-0 w-0.5 bg-gray-200"></div>
                                    
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                                            <p className="font-semibold" style={{ color: accentColor }}>{exp.company}</p>
                                        </div>
                                        <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </span>
                                    </div>
                                    {exp.description && (
                                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{exp.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                                <h2 className="text-xl font-bold text-gray-900">Skills</h2>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 text-sm font-medium rounded-full border-2"
                                        style={{ borderColor: accentColor, color: accentColor }}
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
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                                <h2 className="text-xl font-bold text-gray-900">Education</h2>
                            </div>

                            <div className="space-y-4">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="p-4 rounded-xl" style={{ backgroundColor: accentColor + '10' }}>
                                        <h3 className="font-bold text-gray-900">
                                            {edu.degree} {edu.field && `in ${edu.field}`}
                                        </h3>
                                        <p style={{ color: accentColor }}>{edu.institution}</p>
                                        <p className="text-sm text-gray-500 mt-1">{formatDate(edu.graduation_date)}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section className="mt-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-1 rounded-full" style={{ backgroundColor: accentColor }}></div>
                            <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {data.project.map((p, index) => (
                                <div key={index} className="p-5 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-colors">
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">{p.name}</h3>
                                    {p.description && (
                                        <p className="text-gray-600 text-sm">{p.description}</p>
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

export default CreativeTemplate;
