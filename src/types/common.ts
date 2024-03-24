import { InputHTMLAttributes } from 'react';

export interface User {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
