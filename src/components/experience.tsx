// import { formatDate } from "../assets/templates/ClassicTemplate";
import { type Resume } from "../assets/utils";
import { Briefcase, Trash2, FileText, Sparkles, PlusIcon } from "lucide-react";

interface ExperienceProps {
    data: Resume['experience'];
    onChange: (data: Resume['experience']) => void;
}

const Experience = ({ data, onChange }: ExperienceProps) => {
    const addExperience = () => {
        const newExperience = {
            position: "",
            company: "",
            start_date: "",
            end_date: "",
            is_current: false,
            description: ""
        };
        onChange([...data, newExperience]);
    };

    const updateExperience = (index: number, field: keyof Resume['experience'][0], value: any) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value }
        onChange(updated);
    };

    const removeExperience = (index: number) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    };

    return (
        <div className="space-y-4">
            <div className="flex items-start flex-col gap-1">
                <div className="flex items-center gap-1">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Professional Experience</h3>
                </div>
                <p className="text-sm text-gray-600">Add your job experience</p>
            </div>
            <button onClick={addExperience} className="flex items-center px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors gap-2 ">
                <PlusIcon className="w-5 h-5 text-gray-600" />
                Add Experience
            </button>

            <p className="text-sm text-gray-600">Add your work history and professional experience</p>

            <div className="space-y-4">
                {data.map((experience, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-md bg-white space-y-4">
                        <div className="flex justify-between items-start">
                            <h4 className="font-medium text-gray-900">Experience  {index + 1}</h4>
                            <button
                                onClick={() => removeExperience(index)}
                                aria-label="Delete experience"
                                className="text-red-500 hover:text-red-700 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2/4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Position*
                                </label>
                                <input
                                    type="text"
                                    value={experience.position || ""}
                                    onChange={(e) => updateExperience(index, 'position', e.target.value)}
                                    placeholder="e.g. Software Engineer"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company*
                                </label>
                                <input
                                    type="text"
                                    value={experience.company || ""}
                                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                                    placeholder="e.g. Tech Company Inc."
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="flex gap-8 ">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Start Date*
                                    </label>
                                    <input
                                        type="month"
                                        value={experience.start_date || ""}
                                        onChange={(e) => updateExperience(index, 'start_date', e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        End Date
                                    </label>
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="month"
                                            value={experience.end_date || ""}
                                            onChange={(e) => updateExperience(index, 'end_date', e.target.value)}
                                            disabled={experience.is_current}
                                            className="w-full  p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                                        />
                                         <label className="flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={experience.is_current}
                                            onChange={(e) => updateExperience(index, 'is_current', e.target.checked ? true : false)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        Current working there
                                    </label>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <button className="flex items-center px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors gap-2 disabled:opacity-50">
                                <Sparkles className="w-5 h-5 text-gray-600" />
                                AI Enhance
                            </button>
                            <textarea
                                value={experience.description || ''}
                                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                                placeholder="Describe your responsibilities and achievements..."
                                className="w-full p-2 border border-gray-300 mt-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                                rows={3}
                            />
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">
                                    {experience.description?.length || 0} characters
                                </span>
                                <span className="text-xs text-gray-500">
                                    Recommended: 50-200 characters
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {data.length === 0 && (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-md">
                        <Briefcase className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p>No work experience added yet</p>
                        <p className="text-sm">Click "Add Experience" to get started</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;