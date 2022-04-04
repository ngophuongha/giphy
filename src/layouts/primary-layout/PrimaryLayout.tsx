import { Container } from "react-bootstrap";
import { NavBar } from "../../components/navbar";
import { TopSearch } from "../../components/top-search";
import { Wrapper } from "../../components/wrapper";

import styles from "./PrimaryLayout.module.scss";

export const PrimaryLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container className={styles.container}>
        <NavBar />
        <TopSearch />
        {children}
      </Container>
    </Wrapper>
  );
};
