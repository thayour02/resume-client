import { Check, Layout } from "lucide-react";
import React from "react";

interface Template {
    id: string;
    name: string;
    description: string;
}

interface TemplateSelectorProps {
    onTemplateChange?: (template: Template) => void;
    selectedTemplate?: Template;
}

export const TemplateSelector = ({ onTemplateChange, selectedTemplate: externalSelectedTemplate }: TemplateSelectorProps) => {
    const templates: Template[] = [
        {
            id: "classic",
            name: 'Classic',
            description: 'A clean and professional template'
        },
        {
            id: "minimal",
            name: 'Minimal',
            description: 'A clean and professional template'
        },
        {
            id: "minimal-image",
            name: 'Minimal Image',
            description: 'A clean and professional template'
        },
        {
            id: "modern",
            name: 'Modern',
            description: 'A modern and sleek template'
        },
    ];

    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedTemplate, setSelectedTemplate] = React.useState<Template>(templates[0]);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (template: Template) => {
        setSelectedTemplate(template);
        setIsOpen(false);
        onTemplateChange?.(template);
    };

    const currentTemplate = externalSelectedTemplate || selectedTemplate;

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="flex items-center gap-2 text-sm text-blue-600 bg-gradient-to-br from-indigo-100 to-blue-50 ring-1 ring-indigo-600 hover:ring-2 transition-all px-3 py-2 rounded-lg hover:shadow-md"
            >
                <Layout size={20} />
                <span className="max-sm:hidden">Template: {currentTemplate?.name}</span>
            </button>    
            
            {isOpen && (
                <div className="absolute top-full left-0 w-64 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-2">
                        {templates.map((template) => (
                            <button
                                key={template.id}
                                onClick={() => handleSelect(template)}
                                className={`relative w-full p-3 border rounded-md cursor-pointer transition-all duration-200 ${
                                    currentTemplate?.id === template.id 
                                        ? "border-indigo-400 bg-indigo-50" 
                                        : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                                }`}
                            >
                                {currentTemplate?.id === template.id && (
                                    <div className="absolute top-2 right-2">
                                        <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                )}
                                <div className="space-y-1 text-left">
                                    <h4 className="font-medium text-gray-800">{template.name}</h4>
                                    <p className="text-xs text-gray-500 italic">{template.description}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};