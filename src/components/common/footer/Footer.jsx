import { styled } from 'styled-components';
import SocialMediaBtns from 'components/common/footer/SocialMediaBtns';

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 16rem;
    padding: 3.2rem 10.4rem 6.4rem;
    margin-top: 12rem;
    background-color: #111322;
    display: flex;
    justify-content: space-between;
    font-family: Arial;
    line-height: 1.8rem;
  `,
  Company: styled.div`
    color: #676767;
  `,
  PolicyAndFAQ: styled.div`
    display: flex;
    color: #cfcfcf;
    gap: 3rem;
  `,
};

function Footer() {
  return (
    <Styled.Container>
      <Styled.Company>@Codeit - 2023</Styled.Company>
      <Styled.PolicyAndFAQ>
        <div>Privacy Policy</div>
        <div>FAQ</div>
      </Styled.PolicyAndFAQ>
      <SocialMediaBtns />
    </Styled.Container>
  );
}

export default Footer;
