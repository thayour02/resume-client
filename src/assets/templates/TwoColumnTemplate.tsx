import { Mail, Phone, MapPin, Link, Globe, Briefcase, GraduationCap, Sparkles, FolderOpen } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const TwoColumnTemplate = ({ data, accentColor }: TemplateProps) => {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800 flex min-h-full">
            {/* Left Sidebar */}
            <aside className="w-1/3 text-white p-6" style={{ backgroundColor: accentColor }}>
                {/* Profile Image */}
                {data.personal_info?.image && typeof data.personal_info.image === 'string' && (
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30">
                        <img src={data.personal_info.image} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Name */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-1">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    {data.personal_info?.profession && (
                        <p className="text-sm opacity-90">{data.personal_info.profession}</p>
                    )}
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-8 text-sm">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-3">
                            <Mail className="size-4 opacity-80" />
                            <span className="break-all text-xs">{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-3">
                            <Phone className="size-4 opacity-80" />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-3">
                            <MapPin className="size-4 opacity-80" />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <a target="_blank" href={data.personal_info.linkedin} className="flex items-center gap-3 hover:opacity-80">
                            <Link className="size-4 opacity-80" />
                            <span className="text-xs">LinkedIn</span>
                        </a>
                    )}
                    {data.personal_info?.website && (
                        <a target="_blank" href={data.personal_info.website} className="flex items-center gap-3 hover:opacity-80">
                            <Globe className="size-4 opacity-80" />
                            <span className="text-xs">Portfolio</span>
                        </a>
                    )}
                </div>

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Sparkles className="size-4" />
                            Skills
                        </h2>
                        <div className="space-y-2">
                            {data.skills.map((skill, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                                    <span className="text-sm">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                            <GraduationCap className="size-4" />
                            Education
                        </h2>
                        <div className="space-y-4">
                            {data.education.map((edu, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-sm">{edu.degree}</h3>
                                    {edu.field && <p className="text-xs opacity-80">{edu.field}</p>}
                                    <p className="text-xs opacity-90">{edu.institution}</p>
                                    <p className="text-xs opacity-70">{formatDate(edu.graduation_date)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Professional Summary */}
                {data.professional_summary && (
                    <section className="mb-6">
                        <h2 className="text-lg font-bold mb-3 pb-2 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
                            About Me
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">{data.professional_summary}</p>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: accentColor, color: accentColor }}>
                            <Briefcase className="size-5" />
                            Work Experience
                        </h2>

                        <div className="space-y-5">
                            {data.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <h3 className="font-bold text-gray-900">{exp.position}</h3>
                                            <p className="text-sm" style={{ color: accentColor }}>{exp.company}</p>
                                        </div>
                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </span>
                                    </div>
                                    {exp.description && (
                                        <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{exp.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section>
                        <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 flex items-center gap-2" style={{ borderColor: accentColor, color: accentColor }}>
                            <FolderOpen className="size-5" />
                            Projects
                        </h2>

                        <div className="grid grid-cols-2 gap-3">
                            {data.project.map((p, index) => (
                                <div key={index} className="p-3 rounded-lg border border-gray-200">
                                    <h3 className="font-bold text-gray-900 text-sm">{p.name}</h3>
                                    {p.description && (
                                        <p className="text-xs text-gray-600 mt-1">{p.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default TwoColumnTemplate;
