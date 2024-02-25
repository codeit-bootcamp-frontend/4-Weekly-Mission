import './InputBox.css';
/**
 *
 * @param {className, placeholder, onChange, type} param0
 * @returns inputBox
 */
const InputBox = ({
  className = 'defalt_input',
  placeholder,
  onChange,
  type,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputBox;
