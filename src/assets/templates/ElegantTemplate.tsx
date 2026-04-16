import { Mail, Phone, MapPin, Link, Globe } from "lucide-react";
import type { TemplateProps } from "./ModernTemplate";

const ElegantTemplate = ({ data, accentColor }: TemplateProps) => {
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
            {/* Header with elegant typography */}
            <header className="text-center py-12 border-b border-gray-200">
                <h1 className="text-5xl font-light mb-3 tracking-wide" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                {data.personal_info?.profession && (
                    <p className="text-xl text-gray-600 font-light italic mb-6">
                        {data.personal_info.profession}
                    </p>
                )}
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
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
                </div>
            </header>

            <div className="px-12 py-8">
                {/* Professional Summary */}
                {data.professional_summary && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-light mb-4 tracking-wide" style={{ color: accentColor }}>
                            Profile
                        </h2>
                        <div className="border-l-4 pl-6" style={{ borderColor: accentColor }}>
                            <p className="text-gray-700 leading-relaxed text-lg font-light">
                                {data.professional_summary}
                            </p>
                        </div>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-light mb-8 tracking-wide" style={{ color: accentColor }}>
                            Professional Experience
                        </h2>
                        <div className="space-y-8">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="relative">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-2xl font-light text-gray-900">{exp.position}</h3>
                                            <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-sm text-gray-600 font-light">
                                            {formatDate(exp.start_date)} - {exp.is_current ? "Present" : (exp.end_date ? formatDate(exp.end_date) : "")}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <div className="text-gray-700 leading-relaxed font-light pl-4 border-l-2 border-gray-200">
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
                    <section className="mb-12">
                        <h2 className="text-3xl font-light mb-8 tracking-wide" style={{ color: accentColor }}>
                            Education
                        </h2>
                        <div className="space-y-6">
                            {data.education.map((edu, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-light text-gray-900">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-600 font-light">
                                        <span>{formatDate(edu.graduation_date)}</span>
                                        {edu.gpa && <span>GPA: {edu.gpa}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                {data.skills && data.skills.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-light mb-8 tracking-wide" style={{ color: accentColor }}>
                            Core Competencies
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {data.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="text-lg text-gray-700 font-light border-b border-gray-300 pb-1"
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
                        <h2 className="text-3xl font-light mb-8 tracking-wide" style={{ color: accentColor }}>
                            Notable Projects
                        </h2>
                        <div className="space-y-6">
                            {data.project.map((proj, index) => (
                                <div key={index}>
                                    <h3 className="text-xl font-light text-gray-900">{proj.name}</h3>
                                    {proj.type && (
                                        <span className="text-sm text-gray-600 font-light">{proj.type}</span>
                                    )}
                                    {proj.description && (
                                        <p className="text-gray-700 leading-relaxed font-light mt-2 pl-4 border-l-2 border-gray-200">
                                            {proj.description}
                                        </p>
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

export default ElegantTemplate;
