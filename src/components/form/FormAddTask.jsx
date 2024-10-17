import { useState } from "react";
import useTaskContext from "../../hooks/useTaskContext";
import { formatedDate } from "../../utils/formatedDate";

const FormAddTask = () => {
    // using use context
    const { handleDataForm, tasks, setForm } = useTaskContext()

    // state for structure data
    const [titleTask, setTitleTask] = useState("");
    const [descriptionTask, setDescriptionTask] = useState("");
    const [priorityTask, setPriorityTask] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [isCompleted, setIsCompleted] = useState(false)

    // state for maxLength title and description
    const [isMaxTitle, setIsMaxTitle] = useState(false)
    const [isMaxDescription, setIsMaxDescription] = useState(false)

    // handle submit event
    const handleTaskSubmit = (event) => {
        event.preventDefault();

        if (!titleTask) return;
        if (!descriptionTask) return;
        if (!priorityTask) return;

        const addTask = {
            id: Date.now(),
            createdAt: new Date(),
            titleTask,
            descriptionTask,
            priorityTask,
            startDate: formatedDate(startDate),
            dueDate: formatedDate(dueDate),
            isCompleted: isCompleted
        }

        handleDataForm(addTask);

        // set default when succes submit
        setTitleTask("")
        setDescriptionTask("")
        setPriorityTask("")
        setStartDate("")
        setDueDate("")
        setIsCompleted(false);
        setForm(false)
    }
    console.log(tasks)

    // handle onChange title and description
    const onChangeHandleTitle = (e) => {
        if (e.target.value.length === 70) {
            setIsMaxTitle(true)
        } else {
            setIsMaxTitle(false)
            setTitleTask(e.target.value)
        }
    }
    const onChangeHandleDesc = (e) => {
        if (e.target.value.length === 150) {
            setIsMaxDescription(true)
        } else {
            setIsMaxDescription(false)
            setDescriptionTask(e.target.value)
        }
    }

    return <>
        <section className="absolute z-[9999] inset-x-0 bg-white shadow border rounded-md">
            <form className="grid grid-cols-2 p-8 gap-x-10">
                <div>
                    <div>
                        <label htmlFor="title " className="after:content-['*'] after:text-red-600 after:ml-0.5 text-base font-medium">Title Task</label>
                        <input id="title" type="text" placeholder="Your headline activity .." className="style-input-task my-1" value={titleTask} onChange={onChangeHandleTitle} />
                        {
                            isMaxTitle && (
                                <p className="text-xs text-red-600 font-medium ">Maximum Headline 70 character</p>
                            )
                        }
                    </div>
                    <div className="my-3">
                        <label htmlFor="description " className="after:content-['*'] after:text-red-600 after:ml-0.5 text-base font-medium">Description Task</label>
                        <input id="description" type="text" placeholder="Your Description activity .." className="style-input-task mb-1" value={descriptionTask} onChange={onChangeHandleDesc} />
                        {
                            isMaxDescription && (
                                <p className="text-xs text-red-600 font-medium ">Maximum Description 150 character</p>
                            )
                        }
                    </div>
                    <div className="my-3">
                        <label className="after:content-['*'] after:text-red-600 after:ml-0.5 text-base font-medium">Status Task</label>
                        <div className=" flex items-center gap-x-4">
                            <input id="important" type="radio" name="progress" value="On Progress" checked={priorityTask === "On Progress"} onChange={(e) => setPriorityTask(e.target.value)} />
                            <label htmlFor="important">Progress</label>
                            <input id="not important" type="radio" name="completed" value="Completed" checked={priorityTask === "Completed"} onChange={(e) => setPriorityTask(e.target.value)} />
                            <label htmlFor="not important">Completed</label>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <label className="after:content-['*'] after:text-red-600 after:ml-0.5 text-base font-medium block">Start Date Task</label>
                        <input className="mb-2" id="title" type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div className="my-3">
                        <label className="after:content-['*'] after:text-red-600 after:ml-0.5 text-base font-medium block">Due Date Task</label>
                        <input type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </div>
                    <div className=" py-2 px-2">
                        <button className="border rounded-md px-5 py-2 font-medium bg-yellow-200" onClick={handleTaskSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </section >
    </>
}

export default FormAddTask;

{/* <td>Mark as done</td>
<td><input id="title" type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} /></td> */}