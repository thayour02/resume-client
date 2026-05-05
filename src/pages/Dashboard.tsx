import Buttons from "../components/home/buttons"
import { PlusIcon, UploadIcon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
    const [showCreate, setShowCreate] = useState(false)
    const [upload, setUpload] = useState(false)
    const [resume, setResume] = useState<File | null>(null)
    const [title, setTitle] = useState(String)

    const navigate = useNavigate()
    const createResume = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setShowCreate(false)
        navigate('/app/build/tah12')
    }

    const uploadResume = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResume
    }

    return (
        <div className="w-full mx-auto ">
            <div className="mx-6 mt-4 text-2xl bg-clip-text text-black text-transparent ">
                <span>Hello, welcome {'tayo'}</span>
            </div>

            <div className="md:flex   gap-1">
                <div className="mx-6 mt-4 shadow">
                    <button onClick={() => setShowCreate(true)} className="bg-white w-50 sm:max-w-full flex flex-col h-48 items-center  justify-center  gap-2
                rounded-lg border border-dashed border-slate-300 group hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                        <PlusIcon className="bg-gradient-to-br from-purple-500 to purple-500 text-white  size-11 rounded-full transition-all duration-500 p-2.5" />
                        <span className="text-sm group-hover:text-purple-300 transition-all duration-300">Create a new resume</span>
                    </button>
                </div>
                <div className="mx-6 mt-4 shadow ">
                    <button onClick={() => setUpload(true)} className="bg-white w-50 sm:max-w- flex flex-col h-48 items-center  justify-center gap-3
                rounded-lg border border-dashed border-slate-300 group hover:border-purple-400 hover:shadow-lg transition-all duration-300">
                        <UploadIcon className="bg-gradient-to-br from-indigo-500 to purple-500 text-white  size-11 rounded-full transition-all duration-500 p-2.5" />
                        <span className="text-sm group-hover:text-purple-300 transition-all duration-300">Upload existing resume</span>
                    </button>
                </div>
            </div>

            <hr className="border-slate-300 my-6 sm:w-[330px] mx-6" />

            <div>
                {
                    showCreate && (
                        <form onSubmit={createResume} onClick={() => setShowCreate(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                            <div onClick={e => e.stopPropagation()} className="bg-white text-black max-w-md w-full mx-4 md:p-6 p-4 text-left text-sm rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
                                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create Resume</h2>
                                <input className="w-full border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
                                    type="text" placeholder="resume title" />
                                <Buttons onClick={() => { setShowCreate(false); setTitle('') }} placeholder='Create' />
                            </div>
                        </form>
                    )
                }
            </div>
            <div>
                {
                    upload && (
                        <form onSubmit={uploadResume} onClick={() => setUpload(false)} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                            <div onClick={e => e.stopPropagation()} className="bg-white text-black max-w-md w-full mx-4 md:p-6 p-4 text-left text-sm rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
                                <h2 className="text-2xl font-semibold mb-3 text-center text-gray-800">Create Resume</h2>
                                <input onChange={(e)=>e.target.value} value={title} className="w-full border mt-1 mb-2 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
                                    type="text" placeholder="resume title" />
                                <label htmlFor="fileInput" className="border bg-white rounded-md text-sm w-80 border-indigo-600/60 p-8 flex flex-col items-center gap-4  cursor-pointer hover:border-indigo-500 transition">
                                    {resume ?
                                        <div className="flex flex-col items-center gap-2">
                                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm text-green-600 font-medium">{resume.name}</p>
                                        </div>
                                        : <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>}
                                    <p className="text-gray-500">Drag & drop your files here</p>
                                    <p className="text-gray-400">Or <span className="text-indigo-800 text-xl underline text-bold">click</span> to upload</p>
                                    <input id="fileInput" type="file" accept=".pdf" onChange={(e)=>e.target.files && setResume(e.target.files[0])} className="hidden" />
                                </label>

                                <Buttons onClick={() => { setUpload(false); setTitle('') }} placeholder='Upload Resume' />
                            </div>
                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard