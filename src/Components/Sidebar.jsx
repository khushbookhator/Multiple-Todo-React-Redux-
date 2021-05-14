
import styles from "./todo.module.css"

function Sidebar() {
    return(
        <div className={styles.sidebarouter}>
            <div>USER DETAILS</div>
            <div style={{
                display:"flex",
                flexDirection:"column"
            }}>
                <button>ALL</button>
                <button>PERSONAL</button>
                <button>OFFICIAL</button>
                <button>OTHERS</button>
            </div>
            <div>
            </div>
            <div>
                <button>LOGOUT</button>
            </div>
        </div>
    )
}


export {Sidebar}
//https://rest-api-khushboo.herokuapp.com/multitodo

