/* eslint-disable no-unused-vars */
import ButtonSvg from "../assets/svg/ButtonSvg";
function Button({ className, href, white, px, onClick, children }) {
  const classes = `button relative inline-flex items-center justify-center hover:text-color-1 h-11 transition-colors ${
    className || ""
  } ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
}

export default Button;
