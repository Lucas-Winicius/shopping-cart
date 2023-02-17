import { useRouteError } from "react-router-dom"
import "../styles/errorPage.css"

const ErrorPage = () => {
    let error = useRouteError()
    return <div id="error">
        <img src={`https://http.cat/${error.status}`} className="errorImage"/>
    </div>
}

export default ErrorPage