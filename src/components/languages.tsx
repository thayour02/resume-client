import type {  Resume } from "../assets/utils";
import  { Globe, Plus, Trash2 }  from "lucide-react";

interface LanguagesProps {
    data: Resume['languages'];
    onChange: (data: Resume['languages']) => void;
}


const Languages = ({ data, onChange }: LanguagesProps) => {
    const addLanguage = () => {
        const newLanguage = {
            language: "",
            proficiency: ""
        };
        onChange([...data, newLanguage]);
    };

    const removeLanguage = (index: number) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated);
    };


    const updateLanguage = (index: number, field: keyof Resume['languages'][0], value: any) => {
        const updated = data.map((lang, i) => 
            i === index ? { ...lang, [field]: value } : lang
        );
        onChange(updated);
    };

    const proficiencyLevels = [
        "Basic",
        "Conversational",
        "Professional",
        "Fluent",
        "Native"
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Languages</h3>
                </div>
                <button
                    onClick={addLanguage}
                    className="flex items-center px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors gap-2 "
                >
                    <Plus className="w-4 h-4" />
                    Add Language
                </button>
            </div>

            <div className="space-y-4">
                {data.map((language, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-md bg-white space-y-4">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-700">Language {index + 1}</h4>
                            <button
                                onClick={() => removeLanguage(index)}
                                aria-label="Delete language"
                                className="text-red-500 hover:text-red-700 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Language*
                                </label>
                                <input
                                    type="text"
                                    value={language.language}
                                    onChange={(e) => updateLanguage(index, 'language', e.target.value)}
                                    placeholder="e.g., English, Spanish, French"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Proficiency*
                                </label>
                                <select
                                    value={language.proficiency}
                                    onChange={(e) => updateLanguage(index, 'proficiency', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select proficiency</option>
                                    {proficiencyLevels.map((level) => (
                                        <option key={level} value={level}>
                                            {level}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
                
                {data.length === 0 && (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-md">
                        <Globe className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm">No languages added yet</p>
                        <p className="text-xs mt-1">Add languages you speak to showcase your communication skills</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Languages;
