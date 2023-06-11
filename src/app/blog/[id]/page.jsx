import Image from "next/image";
import styles from "./page.module.css";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{"Blog Title"}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            perferendis et suscipit. Pariatur ipsum quaerat magnam sunt animi
            architecto quisquam itaque ullam optio repudiandae perferendis enim
            porro, ad quod excepturi natus necessitatibus similique quae illo
            reprehenderit illum omnis! Labore ullam accusantium eveniet ducimus,
          </p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{"husnain"}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus non
          eius autem? Assumenda blanditiis iusto, aperiam dolorem voluptates
          tempore optio. Veritatis culpa quod beatae nobis. Enim distinctio
          porro est praesentium voluptatibus dolores nisi, ipsum, iusto facilis
          saepe, recusandae modi tenetur tempore vero odit magni quae minima eum
          voluptates? Aliquam dolorem iure voluptate! Magni eligendi pariatur
          adipisci voluptatum officia, eum ab cumque consequatur eaque facere
          illo nam laudantium suscipit? Similique obcaecati ex quisquam dolores
          ipsum harum possimus laborum omnis ea. Ducimus laudantium, itaque in
          corrupti quibusdam eligendi ex provident, voluptatem cumque voluptate
          maxime at. Atque, temporibus ipsum expedita consequuntur laboriosam
          quas, dolores saepe similique dolorum eaque ratione error ab sit
          maxime quos iusto repellat ex porro rerum! Totam laboriosam numquam
          dignissimos quod, autem eaque porro enim corporis soluta repellendus
          quos dolore delectus. Atque excepturi culpa esse maiores consequuntur
          ipsam cupiditate numquam aspernatur provident a autem consequatur,
          iste odio rem! Aliquam veniam aspernatur quam vitae adipisci voluptate
          velit error ut, dicta dolores non nam nostrum quaerat sequi sit illum
          temporibus ipsa? Reprehenderit facilis quisquam, pariatur ad ipsa
          debitis nihil culpa nisi ducimus quo nulla eius atque officia nostrum
          eveniet veniam placeat iste. Labore delectus quibusdam necessitatibus.
          Tenetur quas facilis aliquam dolore quibusdam.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
