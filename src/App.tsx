import Dashboard from "./pages/dashboard/Dashboard";
import { QueryClientProvider, QueryClient} from "@tanstack/react-query";
import { useState } from "react";
import { Status } from "./components/createTaskForm/enums/Status";
import { Priority } from "./components/createTaskForm/enums/Priority";

import { db } from "./firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ICreateTask } from "./components/taskarea/interfaces/ICreateTask";


const client = new QueryClient()


const App = () => {
  const tasksCollectionRef = collection(db, 'tasks')

    const [title, setTitle] = useState<string | undefined>(undefined)
    const [description, setDescription] = useState<string | undefined>(undefined)
    const [date, setDate] = useState<Date | null>(new Date())
    const [status, setStatus] = useState<string>(Status.todo)
    const [priority, setPriority] = useState<string>(Priority.normal)


    const createTaskHandler = async() => {
        if(!title || !date || !description){
            return
        }

        const newTask: ICreateTask = {
            title, 
            description,
            date: date.toString(),
            status,
            priority,
        }
        console.log(newTask)

        await addDoc(tasksCollectionRef, newTask)
    }


  return (
    <QueryClientProvider client={client}>
      <div>
        <Dashboard 
          // getTasks={getTasks} 
          createTaskHandler={createTaskHandler}
          title={title}
          description={description}
          date={date}
          status={status}
          priority={priority}
          setTitle={setTitle}  
          setDate={setDate}
          setDescription={setDescription}
          setStatus={setStatus}
          setPriority={setPriority}
        />
      </div>
    </QueryClientProvider>

  )
}
 
export default App;