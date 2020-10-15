import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loader from "Components/Loader"

const Index = lazy(() => import("./Containers/List"))
const Detail = lazy(() => import("./Containers/Detail"))

const App = () => {
    return (
        <Router basename="/">
            <Switch>
                <Suspense fallback={<Loader />}>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/:name" component={Detail} />
                </Suspense>
            </Switch>
        </Router>
    )
}

export default App
