import styled from "styled-components";
import { Wrapper } from "../../components/wrapper";
import { commonColors, screens } from "../../themes";

export const AuthFormWrapper = styled(Wrapper)`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: auto;
  background-image: linear-gradient(
    to right,
    ${commonColors.brickRed},
    ${commonColors.coralBlue}
  );
  .form-container {
    height: 70%;
    width: 100%;
    margin: auto;
  }
`;

export const AuthFormContainer = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 0.25rem;
  padding: 3rem;
  background-color: ${commonColors.light};
  color: ${commonColors.dark};
  @media only screen and (min-width: ${screens.md}) {
    width: 50%;
  }

  @media only screen and (min-width: ${screens.lg}) {
    width: 40%;
  }

  @media only screen and (min-width: ${screens.xl}) {
    width: 25%;
  }
`;
