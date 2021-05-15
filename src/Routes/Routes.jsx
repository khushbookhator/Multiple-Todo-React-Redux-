
import React from 'react'
import { Route, Switch } from 'react-router'
import { CreateTasks } from '../Components/AddTodo'
import { Dashboard } from '../Components/Dashboard'
import { Sidebar } from '../Components/Sidebar'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <div style={{
                    display:"flex"
                }}>
                <Sidebar></Sidebar>
                <Dashboard>
                </Dashboard>
                </div>
            </Route>
            <Route exact path ="/createtask">
                <CreateTasks/>
            </Route>
        </Switch>
    )
}

export {Routes}
