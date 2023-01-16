import style from "./Card.module.scss"

function Card({children, width}){
    return <div className={`${style.card} ${style[width]}`}>{children}</div>
}

export default Card;