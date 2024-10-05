import { useState } from "react";
import useTaskContext from "../../hooks/useTaskContext";
import { formatedDate } from "../../utils/formatedDate";

const FormAddTask = () => {
    // using use context
    const { handleDataForm, tasks } = useTaskContext()

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
        if (!startDate) return;
        if (!dueDate) return;

        const addTask = {
            id: Date.now(),
            createdAt: new Date(),
            titleTask,
            descriptionTask,
            priorityTask,
            startDate: formatedDate(startDate),
            dueDateDate: formatedDate(dueDate),
            isCompleted: isCompleted
        }

        handleDataForm(addTask);

        // set default when succes submit
        setTitleTask("")
        setDescriptionTask("")
        setPriorityTask("")
        setStartDate("")
        setDueDate("")
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
        <section>
            <form>
                <table className="table-auto w-2/4 border-spacing-2 border-separate">
                    <tbody className="">
                        <tr>
                            <td className="after:content-['*'] after:text-red-600 after:ml-0.5">Headline activity</td>
                            <td ><input id="title" type="text" placeholder="Headline activity .." className="style-input-task mb-1" value={titleTask} onChange={onChangeHandleTitle} />
                                {
                                    isMaxTitle && (
                                        <p className="text-xs text-red-600 font-medium ">Maximum Headline 70 character</p>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Your description activity</td>
                            <td><input id="description" type="text" placeholder="Description activity .." className="style-input-task mb-1" value={descriptionTask} onChange={onChangeHandleDesc} />
                                {
                                    isMaxDescription && (
                                        <p className="text-xs text-red-600 font-medium ">Maximum Description 150 character</p>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Priority activity</td>
                            <td className="flex items-center gap-x-3"><input id="important" type="radio" name="priority" value="Important" onChange={(e) => setPriorityTask(e.target.value)} />
                                <label htmlFor="important">Important</label>
                                <input id="not important" type="radio" name="priority" value="Not Important" onChange={(e) => setPriorityTask(e.target.value)} />
                                <label htmlFor="not important">Not important</label></td>
                        </tr>
                        <tr>
                            <td className="mb-2">Start date activity</td>
                            <td><input className="mb-2" id="title" type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>End date activity</td>
                            <td><input id="title" type="datetime-local" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Mark as done</td>
                            <td><input id="title" type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} /></td>
                        </tr>
                    </tbody>
                </table>
                <div className=" py-2 px-2">
                    <button className="border rounded-md px-8 py-2" onClick={handleTaskSubmit}>Submit</button>
                </div>
            </form>
        </section >
    </>
}

export default FormAddTask;