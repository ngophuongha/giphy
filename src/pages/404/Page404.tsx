import { useTranslation } from "react-i18next";

import { Header } from "../../components/header";
import { PrimaryLayout } from "../../layouts/primary-layout/PrimaryLayout";
import styles from "./Page404.module.scss";

export const Page404 = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <PrimaryLayout>
      <div className={styles["page-404"]}>
        <Header className="d-flex flex-column">
          <h3 className={styles["header-404"]}>{t("pageNotFound")}</h3>
          <h4 className={styles["sub-header-404"]}>{t("tryAgain")}</h4>
        </Header>
      </div>
    </PrimaryLayout>
  );
};
