import { ADDTASK, HANDLEDELETE, HANDLEDONE } from "./TypeActions"

export const addTask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}

export const handleDone=(payload)=>{
    return(
        {
            type : HANDLEDONE,
            payload
        }
    )
}

export const handleDelete=(payload)=>{
    return(
        {
            type : HANDLEDELETE,
            payload
        }
    )
}