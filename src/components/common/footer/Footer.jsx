import { styled } from 'styled-components';
import SocialMediaBtns from 'components/common/footer/SocialMediaBtns';

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 16rem;
    padding: 3.2rem 0 6.4rem;
    margin-top: 6rem;
    background-color: #111322;

    display: flex;
    justify-content: center;
    font-family: Arial;
    line-height: 1.8rem;
  `,

  InnerWrap: styled.div`
    width: 100%;
    max-width: 192rem;
    padding: 0 10.4rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      display: grid;
      grid-template:
        'service sns'
        'company .'
        /1fr 1fr;
      row-gap: 6rem;

      padding: 0 3.2rem;
    }
  `,

  Company: styled.div`
    color: #676767;

    @media (max-width: 767px) {
      grid-area: company;
    }
  `,

  PolicyAndFAQ: styled.div`
    display: flex;
    color: #cfcfcf;
    gap: 3rem;
    white-space: nowrap;

    @media (max-width: 767px) {
      grid-area: service;
    }
  `,
};

function Footer() {
  return (
    <Styled.Container>
      <Styled.InnerWrap>
        <Styled.Company>@Codeit - 2023</Styled.Company>
        <Styled.PolicyAndFAQ>
          <div>Privacy Policy</div>
          <div>FAQ</div>
        </Styled.PolicyAndFAQ>
        <SocialMediaBtns style={{ gridArea: 'sns' }} />
      </Styled.InnerWrap>
    </Styled.Container>
  );
}

export default Footer;
