import { field, type Resume, type PersonalInfoField } from "@/assets/utils";
import { User } from "lucide-react";
import { Link } from "react-router-dom"

interface PersonalInfo {
    data: Resume['personal_info'];
    onChange: (data: Resume['personal_info']) => void;
    removeBackground: boolean;
    setRemoveBackground: (value: boolean) => void;
}

const Personal = ({ data, onChange, removeBackground, setRemoveBackground }: PersonalInfo) => {
    const handleChange = (field: PersonalInfoField | 'image', value: any) => {
        onChange({ 
            ...data, 
            [field]: value 
        });
    }
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-900">Personal Info</h3>
            <p>Get started with personal information</p>

            <div className="">
                <label className="flex items-center">
                    {data.image ? (
                        <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)}
                            alt="user-image " className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-600 hover:opacity-80 cursor-pointer" />
                    ) : (
                        <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
                            <User className="size-10 p-2.5 rounded-full border" />
                            upload user image
                        </div>
                    )}

                    <input type="file" accept="image/jpeg, image/png" className="hidden" onChange={(e) => handleChange("image", e.target.files?.[0])} />
                    {
                        typeof data.image === "object" && (
                            <div className="flex flex-col gap-2 pt-4 pl-4 text-sm">
                                <p className="pt-2">Remove background</p>
                                <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                    <input type="checkbox" className="sr-only peer" onChange={() => setRemoveBackground(!removeBackground)} checked={removeBackground} />
                                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-200"></div>
                                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                </label>
                            </div>
                        )
                    }
                </label>
            </div>
            {field.map((items, index) => {
                const icon = items.icon
                return (
                    <div key={items.key} className="space-y-1 mt-5">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
                            <items.icon className="size-4" />
                            {items.label}
                            {items.required && <span className="text-red-500">*</span>}
                        </label>
                        <input type={items.type} value={data[items.key] || ""}
                        onChange={(e)=>handleChange(items.key, e.target.value)} className="w-full border mt-1.5 mb-4 border-gray-500/30 outline-none rounded py-2.5 px-3"
                        required={items.required} placeholder={`Enter Your ${items.label.toLocaleLowerCase()}`}/>

                    </div>
                )
            })}

        </div>
    )
}

export default Personal