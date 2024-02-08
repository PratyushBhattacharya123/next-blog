import styles from "./menuCategories.module.scss";
import Link from "next/link";
import Image from "next/image";

const MenuCategories = ({ withImage }) => {
  return (
    <div className={styles.categories}>
      <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.style}`}
      >
        {!!withImage && (
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        )}
        style
      </Link>
      <Link
        href="/blog?cat=fashion"
        className={`${styles.category} ${styles.fashion}`}
      >
        {!!withImage && (
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        )}
        fashion
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${styles.category} ${styles.food}`}
      >
        {!!withImage && (
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        )}
        food
      </Link>
      <Link
        href="/blog?cat=travel"
        className={`${styles.category} ${styles.travel}`}
      >
        {!!withImage && (
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        )}
        travel
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.category} ${styles.culture}`}
      >
        {!!withImage && (
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        )}
        culture
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.category} ${styles.coding}`}
      >
        {!!withImage && (
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
        )}
        coding
      </Link>
    </div>
  );
};

export default MenuCategories;
