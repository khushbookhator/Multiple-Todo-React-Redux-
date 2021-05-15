import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, getTodo, toggleTodo } from "../Redux/Todo/Action"
import styles from "./todo.module.css"


function Dashboard() {

    const todo = useSelector(state => state.todo.todo)
    console.log(todo)
    const dispatch = useDispatch()


    const changeStatusfromDashboard = (item, subs) => {
        const payload = {
            ...item,
            subtasks:item.subtasks?.map((el) => el.id === subs.id? {...el, status: !el.status}:el)
        }
        dispatch(toggleTodo(payload))
    }
    const deleteSubtasks = (item, subs) => {
        const payload = {
            ...item,
            subtasks:item.subtasks?.filter((el) => el.id !== subs.id)
        }
        dispatch(deleteTodo(payload))
    }

    useEffect(() => {
        dispatch(getTodo())
    },[dispatch])

    return(
        <div className={styles.dashout}>
            <div id="todo">
                <div>TODO</div>
                <div>
                    {
                        todo?.filter(item => item.status === "Todo").map((it) => (
                            <div>
                                <h3>{it.title}</h3>
                                {/* <div>{it.tag}</div> */}
                                <p>{it.description}</p>
                                <div>{
                                        it.subtasks?.map(subs => (
                                            <div key={subs.id} style={{display:"flex"}}>
                                                <input type="checkbox" onChange={() => changeStatusfromDashboard(it, subs)} checked={subs.status}/>
                                                <p>{subs.title}</p>
                                                <button onClick={() => deleteSubtasks(it, subs)}>DELETE</button>
                                            </div>
                                        ))
                                    }</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id="inprogress">
                <div>IN PROGRESS</div>
                <div>
                {
                        todo?.filter(item => item.status === "InProgress").map((it) => (
                            <div>
                                <h3>{it.title}</h3>
                                {/* <div>{it.tag}</div> */}
                                <p>{it.description}</p>
                                <div>{
                                        it.subtasks?.map(subs => (
                                            <div key={subs.id} style={{display:"flex"}}>
                                                <input type="checkbox" onChange={() => changeStatusfromDashboard(it, subs)} checked={subs.status}/>
                                                <p>{subs.title}</p>
                                                <button>DELETE</button>
                                            </div>
                                        ))
                                    }</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id="done">
                <div>DONE</div>
                <div>
                {
                        todo?.filter(item => item.status === "Done").map((it) => (
                            <div>
                                <h3>{it.title}</h3>
                                {/* <div>{it.tag}</div> */}
                                <p>{it.description}</p>
                                <div>{
                                        it.subtasks?.map(subs => (
                                            <div key={subs.id} style={{display:"flex"}}>
                                                <input type="checkbox" onChange={() => changeStatusfromDashboard(it, subs)}checked={subs.status}/>
                                                <p>{subs.title}</p>
                                                <button>DELETE</button>
                                            </div>
                                        ))
                                    }</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export {Dashboard}