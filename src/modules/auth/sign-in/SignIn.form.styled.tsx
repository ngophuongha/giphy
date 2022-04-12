import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSignInStep = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const StyledSignInContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
  overflow: hidden;
`;
