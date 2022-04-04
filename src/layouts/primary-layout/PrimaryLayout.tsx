import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { Header } from "../../components/header";
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
        <Header className="d-flex align-items-center">
          <FontAwesomeIcon icon={faChartLine} />{" "}
          <h3 className="h4 px-3">Trending Gifs</h3>
        </Header>
        {children}
      </Container>
    </Wrapper>
  );
};
