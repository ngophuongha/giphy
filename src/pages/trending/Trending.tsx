import { useTranslation } from "react-i18next";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

import { Header } from "../../components/header";
import { PrimaryLayout } from "../../layouts/primary-layout/PrimaryLayout";

import { GifListView } from "../../modules/gif-list/GifList.view";

export const Trending = (): JSX.Element => {
  const { t } = useTranslation("common");

  return (
    <PrimaryLayout>
      <Helmet>
        <title>{t("title.trending")}</title>
      </Helmet>
      <Header className="d-flex align-items-center">
        <FontAwesomeIcon icon={faChartLine} />{" "}
        <h3 className="h4 px-3">{t("header.trending")}</h3>
      </Header>
      <GifListView />
    </PrimaryLayout>
  );
};
