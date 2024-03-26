import styles from "./Input.module.scss";
import classNames from "classnames/bind";
import { ChangeEvent } from "react";

const cx = classNames.bind(styles);
interface InputProps {
  type?: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cx("input")}
    />
  );
};
