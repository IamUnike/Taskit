import { ITaskApi } from "../interfaces/ITaskApi"
import { TaskCounterStatusType } from "../../taskCounter/interfaces/ITaskCounter"

export const CountTask = (tasks:ITaskApi[], status:TaskCounterStatusType): number => {
    if(!Array.isArray(tasks)){
        return 0
    }

    const totalTask = tasks.filter((task) => {
        return task.status === status
    })

    return totalTask.length
}