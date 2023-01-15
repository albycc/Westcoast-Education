import style from "./Form.module.scss";

function FormItem({ children, align }) {
  return (
    <li className={`${style["form-item-column"]} ${style[align]}`}>
      {children}
    </li>
  );
}

export default FormItem;
