import { type Resume } from "@/assets/utils";
import { FileText, Sparkles } from "lucide-react";

interface SummaryProps {
    data: Resume['professional_summary'];
    onChange: (data: Resume['professional_summary']) => void;
}

const Summary = ({ data, onChange }: SummaryProps) => {
    const handleChange = (value: string) => {
        onChange(value);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-start flex-col gap-1">
                <div className="flex items-center gap-1">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Professional Summary</h3>
                </div>
                <p className="text-sm text-gray-600">Write a brief summary about yourself and your professional goals</p>
            </div>
            <button className="flex items-center px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors gap-2 disabled:opacity-50">
                <Sparkles className="w-5 h-5 text-gray-600" />
                AI Enhance
            </button>

            <div className="space-y-2">
                <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
                    Summary
                </label>
                <textarea
                    id="summary"
                    value={data || ''}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="A brief professional summary highlighting your key skills, experience, and career objectives..."
                    className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y transition-colors"
                    rows={5}
                />
                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                        {data?.length || 0} characters
                    </span>
                    <span className="text-xs text-gray-500">
                        Recommended: 50-200 characters
                    </span>
                </div>
            </div>

            {data && (
                <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Preview:</h4>

                </div>
            )}
        </div>
    );
};

export default Summary;