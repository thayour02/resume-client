import { type Resume } from "../assets/utils";
import { GraduationCap, PlusIcon, Trash2 } from "lucide-react";

interface EducationProps {
    data: Resume['education'];
    onChange: (data: Resume['education']) => void;
}

const Education = ({ data, onChange }: EducationProps) => {
    const addEducation = () => {
        const newEducation = {
            degree: "",
            field: "",
            institution: "",
            graduation_date: "",
            gpa: ""
        };
        onChange([...data, newEducation]);
    };

    const updateEducation = (index: number, field: keyof Resume['education'][0], value: any) => {
        const updated = data.map((edu, i) =>
            i === index ? { ...edu, [field]: value } : edu
        );
        onChange(updated);
    };

    const removeEducation = (index: number) => {
        onChange(data.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                </div>
                <button
                    onClick={addEducation}
                    className="flex items-center px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors gap-2 ">
                    <PlusIcon className="w-5 h-5 text-gray-600" />
                    Add Education
                </button>
            </div>
            <p className="text-sm text-gray-600">Add your educational background and qualifications</p>

            <div className="space-y-4">
                {data.map((education, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-md bg-white space-y-4">
                        <div className="flex justify-between items-start">
                            <h4 className="font-medium text-gray-900">Education {index + 1}</h4>
                            <button
                                onClick={() => removeEducation(index)}
                                aria-label="Delete education"
                                className="text-red-500 hover:text-red-700 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Degree*
                                </label>
                                <input
                                    type="text"
                                    value={education.degree}
                                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                                    placeholder="e.g. Bachelor of Science"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Field of Study
                                </label>
                                <input
                                    type="text"
                                    value={education.field || ''}
                                    onChange={(e) => updateEducation(index, 'field', e.target.value)}
                                    placeholder="e.g. Computer Science"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Institution*
                                </label>
                                <input
                                    type="text"
                                    value={education.institution}
                                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                                    placeholder="e.g. University of Example"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor={`graduation-date-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                                    Graduation Date*
                                </label>
                                <input
                                    id={`graduation-date-${index}`}
                                    type="month"
                                    value={education.graduation_date}
                                    onChange={(e) => updateEducation(index, 'graduation_date', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    GPA
                                </label>
                                <input
                                    type="text"
                                    value={education.gpa || ''}
                                    onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                                    placeholder="e.g. 3.8"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {data.length === 0 && (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-md">
                        <GraduationCap className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p>No education added yet</p>
                        <p className="text-sm">Click "Add Education" to get started</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Education;