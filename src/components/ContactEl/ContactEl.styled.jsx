import styled from 'styled-components';

export const Btn = styled.button`
  background-color: #ff260090;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    background-color: red;
  }
`;

export const ContactsEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
