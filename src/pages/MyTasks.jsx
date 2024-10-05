import { useState } from "react"
import FormAddTask from "../components/form/FormAddTask"
import useTaskContext from "../hooks/useTaskContext"

const MyTasks = () => {
    const { tasks } = useTaskContext();
    const [form, setForm] = useState(true)
    return <>
        <div className="h-screen overflow-hidden p-7">
            <div>
                <h1 className="text-2xl font-medium">Your Task - Web Development</h1>
            </div>

            <div>
                <button onClick={() => setForm(form => !form)}>Add</button>

                {
                    form && (
                        <FormAddTask />
                    )
                }
            </div>
        </div>
    </>
}
export default MyTasks