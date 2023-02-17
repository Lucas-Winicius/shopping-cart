import { useRouteError } from "react-router-dom"
import "../styles/errorPage.css"

const ErrorPage = () => {
    let error = useRouteError()
    return <img src={`https://http.cat/${error.status}`} className="errorImage"/>
}

export default ErrorPage