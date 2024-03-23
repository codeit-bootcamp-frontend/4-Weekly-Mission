import {ReactNode} from "react";
import style from "./cta.module.scss";
import Link from "next/link";

interface Props {
  className?: string;
  src: string;
  children: ReactNode;
}

function ButtonCta({className = "", src, children}: Props) {
  const classnames = `${style.cta} ${className}`;
  return (
    <div className={classnames}>
      <Link href={src}>{children}</Link>
    </div>
  );
}
export default ButtonCta;

// width padding fontSize 인라인으로 다룰필요 없다
// width padding fontSize -> className으로 상황에따라 css적용하기
