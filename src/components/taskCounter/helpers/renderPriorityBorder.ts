import { Priority } from "../../createTaskForm/enums/Priority";

export const renderPriorityBorder = (priority:string):string => {
    switch(priority){
        case Priority.normal:
            return 'gray'
        case Priority.low:
            return 'midnightblue'
        case Priority.high:
            return 'red'
        
            default:
                return 'gray'
    }
}