import { Check, Palette } from "lucide-react";
import { useState } from "react";

interface Colors {
    name: string;
    value: string
}

interface colorSelectorProps {
    selectedColor?: Colors
    onChange: (color: Colors) => void

}

export const Color = ({ selectedColor, onChange }: colorSelectorProps) => {
    const color = [
        { name: "professional blue", value: "#1E40AF" },
        { name: "navy", value: "#1E3A8A" },
        { name: "slate", value: "#475569" },
        { name: "emerald", value: "#059669" },
        { name: "burgundy", value: "#991B1B" },
        { name: "black", value: "#000000" },
        { name: "white", value: "#FFFFFF" }
    ]
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Select color" className="flex items-center gap-1 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100  ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg">
                <Palette />
            </button>
            {
                isOpen && (
                    <div className="grid grid-cols-4 w-60 gap-2 absolute top-full left-0
                    right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
                        {color.map((colors) => (
                            <div key={colors.value} className="relative cursor-pointer group 
                            flex flex-col" onClick={() => {onChange(colors); setIsOpen(false)}}>
                                <div className="w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25 transition-all"
                                    style={{ backgroundColor: colors.value }}>
                                </div>
                                <div >
                                    {selectedColor?.value === colors.value && (
                                        <div className="absolute top-2 right-2">
                                            <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                    )}
                                    <div className="space-y-1 text-left">
                                    {/* <h4 className="font-medium text-gray-800 px-2">{colors.name}</h4> */}
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}