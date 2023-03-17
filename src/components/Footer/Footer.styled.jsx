import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 64px;
  border-top: 1px solid black;
`;

export const FooterDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  width: 100%;
`;
export const FooterDataText = styled.p`
  margin-right: 10px;
  font: inherit;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-align: center;
`;

export const GithubLogo = styled(BsGithub)`
  margin-left: 2px;
  color: #9c27b0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: middle;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 13px 3px #9c27b0;
    transform: scale(1.3);
  }
`;
