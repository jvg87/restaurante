import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

import { Laila } from 'next/font/google';
const laila = Laila({ weight:['600'], subsets: ['latin'] });

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...props}: InputProps) {
  return (  
    <input className={`${styles.input} ${laila.className}`} {...props} />
  );
}


export function TextArea({...props}: TextAreaProps){
  return (
    <textarea className={`${styles.input} ${laila.className}`} {...props}></textarea>
  )
}