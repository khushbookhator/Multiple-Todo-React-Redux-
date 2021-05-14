import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/Todo/Action'
import styles from "./todo.module.css"
const init1 = {
    title : "",
    description : "",
    status: "",
}
const init2 = {
    personal:"",
    official:"",
    others: ""
}
const AddTodo = () => {
    const dispatch = useDispatch()

    
    const [arr, setarr] = useState([])
    const [data, setData] = useState(init1)
    const [tag, setTag] = useState(init2)
    const [subs, setsubs] = useState("")
    const {personal, official, others}= tag
    const {title, description} = data
    const handletogglesubs = (item) => {
        setarr([...arr.map((it) => item.id === it.id?{...item,status : !item.status}:it)])
    }
    const handledeletesubs = (id) => {
        setarr([...arr.filter((it) => it.id !== id)])
    }
    
    const handleChange1 = (e) => {
        const {name,type, value, checked} = e.target
        const val = type === "checkbox" ? checked : value 
        setTag({...tag, [name]:val})
    }
    const handleChange = (e) => {
        const {name,value} = e.target
        setData({...data,[name]:value})
    }
    
    const addSubs = () => {
        const payload = {
            id:arr.length+1,
            title:subs,
            status: false
        }
        setarr([...arr, payload])
    }
    const addTasks = () => {
        const payload = {
            ...data,
            tags:{...tag},
            subtasks:[...arr]
        }
        dispatch(addTodo(payload))
    }
    return (
        <div className={styles.main}>
            <div className={styles.first}>
                {/* init1 */}
                <input name="title" value={title} onChange={handleChange} placeholder="TITLE" type="text"/><br/>
                <textarea name="description" value={description} onChange = {handleChange} placeholder="DESCRIPTION" type="text" /><br/>
                {/* status init1 */}
                <input value="Todo" onChange={handleChange} type="radio" name="status"/> Todo<br/>
                <input value="InProgress" onChange={handleChange} type="radio" name="status"/> In Progress<br/>
                <input value="Done" onChange={handleChange} type="radio" name="status"/> Done<br/>
                {/* init2 tags */}
                <input value={personal} onChange={handleChange1} type="checkbox" name="personal"/> Personal<br/>
                <input value={official} onChange={handleChange1} type="checkbox" name="official"/> Official<br/>
                <input value={others} onChange={handleChange1} type="checkbox" name="others"/> Others<br/>
            </div>
            <div className={styles.second}>
                <div>
                    <input value={subs} onChange={(e) => setsubs(e.target.value)}/>
                    <button onClick={addSubs}>ADD</button>
                </div>
                <div>
                    {arr?.map((item) => (
                        <div>
                            <input value={item.status}
                            onChange={() => handletogglesubs(item)}
                            name="substatus"
                            type="checkbox"/>
                            <p>{item.title}</p>
                            <button onClick={() => handledeletesubs(item.id)}>DELETE</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.third}>
                <div>Date {}</div>
                <button onClick={addTasks}>CREATE NEW TASK</button>
            </div>
        </div>
    )
}

export {AddTodo}