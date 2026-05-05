import { type Resume } from "../assets/utils";
import { FolderClockIcon, Plus, Trash2 } from "lucide-react";

interface ProjectsProps {
    data: Resume['project'];
    onChange: (data: Resume['project']) => void;
}

const Projects = ({ data, onChange }: ProjectsProps) => {
    const addProject = () => {
        const newProject = {
            name: "",
            description: "",
            type: ""
        };
        onChange([...data, newProject]);
    };

    const updateProject = (index: number, field: keyof Resume['project'][0], value: any) => {
        const updated = data.map((project, i) => 
            i === index ? { ...project, [field]: value } : project
        );
        onChange(updated);
    };

    const removeProject = (index: number) => {
        onChange(data.filter((_, i) => i !== index));
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FolderClockIcon className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
                </div>
                <button
                    onClick={addProject}
                   className="flex items-center px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors gap-2 ">
                    <Plus className="w-4 h-4" />
                    Add Project
                </button>
            </div>
            <p className="text-sm text-gray-600">Showcase your personal and professional projects</p>
            
            <div className="space-y-4">
                {data.map((project, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-md bg-white space-y-4">
                        <div className="flex justify-between items-start">
                            <h4 className="font-medium text-gray-900">Project {index + 1}</h4>
                            <button
                                onClick={() => removeProject(index)}
                                aria-label="Delete project"
                                className="text-red-500 hover:text-red-700 transition-colors"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        
                        <div className="space-y-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Project Name*
                                </label>
                                <input
                                    type="text"
                                    value={project.name}
                                    onChange={(e) => updateProject(index, 'name', e.target.value)}
                                    placeholder="e.g. E-commerce Website"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-100 focus:border-purple-100"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Project Type
                                </label>
                                <select
                                    value={project.type || ''}
                                    onChange={(e) => updateProject(index, 'type', e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-100 focus:border-purple-100"
                                >
                                    <option value="">Select type...</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Academic">Academic</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Open Source">Open Source</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                value={project.description || ''}
                                onChange={(e) => updateProject(index, 'description', e.target.value)}
                                placeholder="Describe your project, your role, technologies used, and key achievements..."
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                                rows={4}
                            />
                        </div>
                        
                        {project.name && (
                            <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
                                <h5 className="text-sm font-medium text-gray-700 mb-2">Preview:</h5>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-gray-900">{project.name}</p>
                                    {project.type && (
                                        <p className="text-xs text-gray-600 bg-gray-200 inline-block px-2 py-1 rounded">
                                            {project.type}
                                        </p>
                                    )}
                                    {project.description && (
                                        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                
                {data.length === 0 && (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-md">
                        <FolderClockIcon className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p>No projects added yet</p>
                        <p className="text-sm">Click "Add Project" to showcase your work</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;