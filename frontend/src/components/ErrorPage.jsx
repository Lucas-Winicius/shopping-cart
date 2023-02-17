import { useRouteError } from "react-router-dom"
import "../styles/errorPage.css"

const ErrorPage = () => {
    const error = useRouteError()
    return <div id="error">
        <img src={`https://http.cat/${error.status}`} className="errorImage"/>
    </div>
}

export default ErrorPage