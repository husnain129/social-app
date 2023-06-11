import Button from "@/components/lib/button";
import Image from "next/image";
import Hero from "public/hero.png";
import s from "./page.module.css";

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <h1 className={s.title}>Better design for your digital products.</h1>
        <p className={s.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text={"See Our Works"} url={"/"} />
      </div>
      <div className={s.item}>
        <Image src={Hero} alt="" className={s.img} />
      </div>
    </div>
  );
}
