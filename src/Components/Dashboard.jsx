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
            <div id="todo" className={styles.todo}>
                <div>TODO</div>
                <div className={styles.card}>
                    {
                        todo?.filter(item => item.status === "Todo").map((it) => (
                            <div>
                                <h3>{it.title}</h3>
                                {/* <div>{it.tag}</div> */}
                                <p>{it.description}</p>
                                <div>{
                                        it.subtasks?.map(subs => (
                                            <div key={subs.id} className={styles.subcheck}>
                                                <input className={styles.checks} type="checkbox" onChange={() => changeStatusfromDashboard(it, subs)} checked={subs.status}/>
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
            <div id="inprogress" className={styles.todo}>
                <div>IN PROGRESS</div>
                <div className={styles.card}>
                {
                        todo?.filter(item => item.status === "InProgress").map((it) => (
                            <div>
                                <h3>{it.title}</h3>
                                {/* <div>{it.tag}</div> */}
                                <p>{it.description}</p>
                                <div>{
                                        it.subtasks?.map(subs => (
                                            <div key={subs.id} className={styles.subcheck}>
                                                <input className={styles.checks} type="checkbox" onChange={() => changeStatusfromDashboard(it, subs)} checked={subs.status}/>
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
            <div id="done" className={styles.todo}>
                <div>DONE</div>
                <div className={styles.card}>
                {
                        todo?.filter(item => item.status === "Done").map((it) => (
                            <>
                                <h3>{it.title}</h3>
                                {/* <div>{it.tag}</div> */}
                                <p>{it.description}</p>
                                <div>{
                                        it.subtasks?.map(subs => (
                                            <div key={subs.id} className={styles.subcheck}>
                                                <input className={styles.checks} type="checkbox" onChange={() => changeStatusfromDashboard(it, subs)}checked={subs.status}/>
                                                <p>{subs.title}</p>
                                                <button>DELETE</button>
                                            </div>
                                        ))
                                    }</div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export {Dashboard}