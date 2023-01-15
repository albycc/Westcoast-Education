import { forwardRef } from "react";
import style from "./Button.module.scss";

const Button = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      type={props.type}
      className={`${style.button} ${style[props.background]}`}
      disabled={props.disabled}
      onClick={props.func}
      >
      {props.label}
    </button>
  );
});

export default Button;
