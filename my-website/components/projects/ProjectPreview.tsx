import styles from "./ProjectPreview.module.scss";

type ProjectPreviewProps = {
  href: string;
  src: string;
  alt: string;
  variant?: "photo" | "logo";
};

export default function ProjectPreview({
  href,
  src,
  alt,
  variant = "photo",
}: ProjectPreviewProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.previewLink}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={
          variant === "logo" ? styles.previewImageLogo : styles.previewImage
        }
      />
    </a>
  );
}
