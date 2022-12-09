import styled from "styled-components";

export const Title = styled.h1`
  color: #7a7c7f;
  text-align: center;
  font-family: "Libre Baskerville", serif;
  line-height: 45px;
  text-align: center;
  text-shadow: 0 1px 1px #fff;
  padding-top: 20px;

  @media screen and (max-width: 1280px) {
    font-size: 20px;
    padding-top: 0;
    line-height: 20px;
  }
  @media screen and (max-width: 900px) {
    font-size: 15px;
    padding-top: 0;
    line-height: 20px;
  }

  @media screen and (max-width: 600x) {
    font-size: 10px;
    padding-top: 0;
    line-height: 20px;
  }
`;

export const Para = styled.p`
  color: #7a7c7f;
  font-size: 29px;
  font-family: "Libre Baskerville", serif;
  line-height: 45px;
  text-align: center;
  text-shadow: 0 1px 1px #fff;
  padding-top: 20px;
`;
