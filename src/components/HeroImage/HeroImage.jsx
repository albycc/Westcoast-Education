import style from "./HeroImage.module.scss";
import background from "../../Assets/images/background.jpg"

function HeroImage() {
  return <img src={background} className={style.background} alt="computer students" />
}

export default HeroImage