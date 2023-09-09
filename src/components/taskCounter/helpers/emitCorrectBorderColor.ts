import { TaskCounterStatusType } from "../interfaces/ITaskCounter"
import { Status } from "../../createTaskForm/enums/Status"

export const emitCorrectBorderColor = (status: TaskCounterStatusType): string => {
    switch(status){
        case Status.todo:
            return 'red'

        case Status.inProgress:
            return 'yellow'

        case Status.completed:
            return 'green'
    }
}