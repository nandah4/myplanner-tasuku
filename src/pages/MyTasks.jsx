import { useState } from "react"
import FormAddTask from "../components/form/FormAddTask"
import useTaskContext from "../hooks/useTaskContext"
import { FaPencilAlt } from "react-icons/fa";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FaEllipsisH } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import CardTask from "@/components/ui/CardTask";

const MyTasks = () => {
    const { tasks, form, setForm, settings, handleSettingsCard } = useTaskContext();
    return <>
        <div className=" overflow-hidden h-full p-3 ">
            <div className="flex justify-between">
                <h1 className="text-2xl font-medium">All Tasks</h1>
                <button className="inline-flex py-2 text-sm font-medium animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#FFBF61,45%,#FFE6A5,55%,#FFBF61)] bg-[length:200%_100%] focus:ring-2 px-3 text-white transition-colors focus:outline-none" onClick={() => setForm(form => !form)}>
                    <FaPencilAlt className="mr-2" />New Task
                </button>
            </div>

            <div className=" my-4 relative">
                <div className="grid grid-cols-4 gap-3" >
                    {
                        form && (
                            <FormAddTask />
                        )
                    }

                    {
                        tasks.map((task, index) => <>
                            <CardTask key={index}>
                                <div className="flex justify-between items-center">
                                    <div className="px-2 py-[6px] bg-[#FFE6A5] mb-2 rounded-md"><p className="text-xs tracking-wide font-semibold text-orange-500">{task.priorityTask}</p></div>
                                    <FaEllipsisH className="text-sm text-slate-400 cursor-pointer" onClick={() => handleSettingsCard(task.id)} />
                                </div>
                                <div>
                                    <h2 className="font-medium text-lg mb-3 leading-snug">{task.titleTask}</h2>
                                    <p className="text-[13px] mb-3 text-justify">{task.descriptionTask}</p>

                                    <div className="mb-4">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[13px] ">Start</p>
                                            <div className="flex items-center gap-x-2">
                                                <FiCalendar className="text-gray-500" />
                                                <p className="text-[13px] font-semibold">{task.startDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-[13px]">Deadline</p>
                                            <div className="flex items-center gap-x-2">
                                                <FiCalendar className=" text-gray-500" />
                                                <p className="text-[13px] font-semibold">{task.dueDate}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        settings === task.id && (
                                            <div className="flex justify-between gap-x-3">
                                                <div className=" bg-[#FCCD2A] p-1 rounded-sm w-full cursor-pointer">
                                                    <p className="text-sm  text-center">See Detail</p>
                                                </div>
                                                <div className="bg-[#C0EBA6] p-1 rounded-sm w-full cursor-pointer">
                                                    <p className="text-sm  text-center">Complete</p>
                                                </div>
                                                <div className="bg-[#EF5A6F] p-1 rounded-sm w-full cursor-pointer">
                                                    <p className="text-sm  text-center">Delete</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </CardTask>
                        </>)
                    }


                </div>
            </div>







        </div>
    </>
}
export default MyTasks