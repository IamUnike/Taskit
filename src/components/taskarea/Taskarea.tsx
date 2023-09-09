import { FC, ReactElement, useEffect, useState } from "react";
import TaskCounter from "../taskCounter/TaskCounter";
import Task from "../task/Task";
//import the date fns library
import format from "date-fns/format";
import { Status } from "../createTaskForm/enums/Status";
import { CountTask } from "./helpers/countTasks";
import { db } from "../../firebase/firebase-config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

interface ITaskArea {
    getTasks?: () => void
}

const Taskarea:FC<ITaskArea> = ():ReactElement => {
    const date:Date = new Date()
    const formattedDate:any = format(date, 'do MMMM, YYY')
    
    // const { getTasks } = props

  const [tasks, setTasks] = useState<any>([])

  const tasksCollectionRef = collection(db, 'tasks')

        useEffect(() => {
            const getTasks = async () => {
                const res = await getDocs(tasksCollectionRef)
        
                const data = res.docs.map( (doc) => (
                  {
                    ...doc.data(), 
                    id:doc.id
                  }
                ))
                setTasks(data)
        console.log(data)
                return data
            }
                getTasks()
        
          }, [])

          async function updateState(id:any, status:string) {
                const taskDoc = doc(db, 'tasks', id)
                const newStatus:any = {status: Status.inProgress}
                console.log(status)
                await updateDoc(taskDoc, newStatus)
          }

    
   
    return ( 
            <section className=" bg-gray-900 col-span-2 text-white flex flex-col gap-8">

                <p className="text-sm mt-4 ml-4"> Status of your task as on {formattedDate} </p>

                <div className="grid grid-cols-3 place-items-center w-5/6 mx-auto">
                    <TaskCounter 
                        count={tasks ? CountTask(tasks, Status.todo) : undefined} 
                        status={Status.todo} 
                    />
                    <TaskCounter 
                        count={tasks ? CountTask(tasks, Status.inProgress) : undefined} 
                        status={Status.inProgress} 
                    />
                    <TaskCounter 
                        count={tasks ? CountTask(tasks, Status.completed) : undefined} 
                        status={Status.completed} 
                    />
                </div>

                {
                    tasks.map((each:any, index:any) => (
                        <Task 
                            id={each.id} 
                            key={index}  
                            title={each.title}
                            description={each.description}
                            priority={each.priority}
                            status={each.status}
                            updateState={updateState}
                        />  
                ))}


            </section>
     );
}
 
export default Taskarea;