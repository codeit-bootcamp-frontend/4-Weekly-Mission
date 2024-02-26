export const classNames = (...classes) => classes.filter(Boolean).join(' ');
export const cond = (cond, className) => (cond ? className : '');