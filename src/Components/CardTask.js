import { useDispatch } from "react-redux"
import { handleDelete, handleDone } from "../Redux/Actions"

const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <h2 className={el.done && "alaya"}>{el.text}</h2>
            <h3>{el.done ? "TRUE" : "FALSE"}</h3> 
            <button onClick={()=> dispatch(handleDelete(el.id))}>Delete</button>
            <button onClick={()=> dispatch(handleDone(el.id))}> Done</button>



        </div>
    )
}
export default CardTask