import { useState } from "react";
import { type Resume } from "@/assets/utils";
import { Sparkles, Plus, X } from "lucide-react";

interface SkillsProps {
    data: Resume['skills'];
    onChange: (data: Resume['skills']) => void;
}

const Skills = ({ data, onChange }: SkillsProps) => {
    const [newSkill, setNewSkill] = useState("");

    const addSkill = () => {
        if (newSkill.trim() && !data.includes(newSkill.trim())) {
            onChange([...data, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const removeSkill = (skillToRemove: string) => {
        onChange(data.filter(skill => skill !== skillToRemove));
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
            </div>
            <p className="text-sm text-gray-600">Add your technical and professional skills</p>
            
            <div className="space-y-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter a skill (e.g. JavaScript, Project Management)"
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        onClick={addSkill}
                        disabled={!newSkill.trim() || data.includes(newSkill.trim())}
                        className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Add
                    </button>
                </div>
                
                {data.length > 0 && (
                    <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Your Skills ({data.length})</h4>
                        <div className="flex flex-wrap gap-2">
                            {data.map((skill, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm group hover:bg-blue-200 transition-colors"
                                >
                                    {skill}
                                    <button
                                        onClick={() => removeSkill(skill)}
                                        className="ml-1 text-blue-600 hover:text-red-600 transition-colors"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {data.length === 0 && (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-md">
                        <Sparkles className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p>No skills added yet</p>
                        <p className="text-sm">Start adding your skills above</p>
                    </div>
                )}
                
                {data.length > 0 && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Skill Categories to Consider:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <div>
                                <span className="font-medium">Technical:</span> Programming languages, frameworks, tools
                            </div>
                            <div>
                                <span className="font-medium">Soft Skills:</span> Communication, leadership, teamwork
                            </div>
                            <div>
                                <span className="font-medium">Domain:</span> Industry-specific knowledge
                            </div>
                            <div>
                                <span className="font-medium">Languages:</span> Spoken languages
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;