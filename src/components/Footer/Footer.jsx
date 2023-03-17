import {
  FooterContainer,
  FooterDataWrapper,
  FooterDataText,
  GithubLogo,
} from 'components/Footer/Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterDataWrapper>
        <FooterDataText>Copyright © 2023 | Developed by</FooterDataText>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Melashchenko"
        >
          <GithubLogo />
        </a>
      </FooterDataWrapper>
    </FooterContainer>
  );
}
