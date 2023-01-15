import { Link } from "react-router-dom";
import style from "./LinkButton.module.scss"

function LinkButton({to, label}){
    return <Link to={to} className={style['link-button']}>{label}</Link>
}

export default LinkButton