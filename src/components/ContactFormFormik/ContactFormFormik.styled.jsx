import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  display: block;
  outline: none;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: white;
  margin-bottom: 32px;
`;

export const Btn = styled.button`
  border: none;
  font-size: 16px;
  color: white;
  background-color: #009dff;
  border-radius: 6px;
  border: 3px solid white;
  padding: 4px;
  margin-left: auto;
  cursor: pointer;
  &:active {
    background-color: #0ab4da;
  }
`;
export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 4px;
  background-color: #009dff;
`;

export const Error = styled(ErrorMessage)`
  color: yellow;
  font-size: 10px;
`;
