import {Button} from '@mui/material';
import React from 'react'

interface CustomButtonProps { 
  title: string; 
  type: 'text' | 'contained' | 'outlined';
  size: 'small' | 'medium' | 'large'
};
const CustomButton = ({ title, type, size }: CustomButtonProps) => (
  <Button variant={type} size={size}>{title}</Button>
);

export default CustomButton