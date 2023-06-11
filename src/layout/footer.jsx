import Image from "next/image";
import s from "./footer.module.css";
const Footer = () => {
  return (
    <div className={s.container}>
      <div>@2021 .husnain - All rights reserved</div>
      <div className={s.social}>
        <Image
          src={"/1.png"}
          width={15}
          height={15}
          className={s.icon}
          alt="icon"
        />
        <Image
          src={"/2.png"}
          width={15}
          height={15}
          className={s.icon}
          alt="icon"
        />
        <Image
          src={"/3.png"}
          width={15}
          height={15}
          className={s.icon}
          alt="icon"
        />
        <Image
          src={"/4.png"}
          width={15}
          height={15}
          className={s.icon}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Footer;
