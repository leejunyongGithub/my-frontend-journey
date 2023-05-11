import styled from "styled-components";
import { SlSocialInstagram } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  return (
    <FooterWrap>
      <div>
        <span>© 2023 by {`Juns's`}</span>
      </div>
      <div>
        <div>
          <a href="https://www.instagram.com/kiwipodo/" target="_blank">
            <MobileButton>
              <SlSocialInstagram size={20} />
            </MobileButton>
          </a>
          <a href="https://github.com/leejunyongGithub/" target="_blank">
            <MobileButton>
              <VscGithubAlt size={20} />
            </MobileButton>
          </a>
        </div>
      </div>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  height: 150px;
  border-top: 1px solid #ededed;
  background: #fff;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 15rem;
  padding-right: 15rem;

  @media all and (min-width: 1024px) and (max-width: 1200px) {
    padding-left: 64px;
    padding-right: 64px;
    box-sizing: border-box;
  }

  @media all and (min-width: 280px) and (max-width: 1024px) {
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
  }
`;

const MobileButton = styled.div`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  .img-btn{
    width: 40px;
    height: 40px;
    background-image: url("/logo.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ceecf5;
    border-radius: 0.3rem;
  }

  @media all and (min-width: 280px) and (max-width: 1024px){
    display: inline-flex;
  }

  @media all and (min-width: 280px) and (max-width: 512px){
    width: 50px;
  }
}
`;
