import Link from "next/link";
import s from "./button.module.css";
const Button = ({ url, text }) => {
  return (
    <Link href={url}>
      <button className={s.container}>{text}</button>
    </Link>
  );
};

export default Button;
