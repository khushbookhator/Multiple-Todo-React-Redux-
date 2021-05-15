
import { Link } from "react-router-dom"
import styles from "./todo.module.css"

function Sidebar() {
    return(
        <div className={styles.sidebarouter}>
            <div className={styles.user}>USER DETAILS</div>
            <Link to="/createtask"><div className={styles.create}>Create Task</div></Link>
            <div className={styles.btnsdiv}>
                <button>ALL</button>
                <button>PERSONAL</button>
                <button>OFFICIAL</button>
                <button>OTHERS</button>
            </div>
            <div>
            </div>
            <div className={styles.logout}>
            LOGOUT
            </div>
        </div>
    )
}


export {Sidebar}
//https://rest-api-khushboo.herokuapp.com/multitodo

