import { Dispatch, SetStateAction } from 'react';

interface IProps {
  id: string;
  setState?: Dispatch<SetStateAction<boolean>>;
}

export const scrollToSection = ({ id, setState }: IProps) => {
  if (typeof setState === 'function') {
    setState((prev) => !prev);
  }

  const section = document.getElementById(id);

  const offset = id === 'introduction' ? 80 : 160;

  window.scrollTo({
    top: section!.offsetTop - offset,
    behavior: 'smooth',
  });
};
