import { Helmet } from "react-helmet";

import { PrimaryLayout } from "../../layouts/primary-layout/PrimaryLayout";
import { GifListView } from "../../modules/gif-list/GifList.view";

export const Trending = (): JSX.Element => {
  return (
    <PrimaryLayout>
      <Helmet>
        <title>Trending GIPHY</title>
      </Helmet>
      <GifListView />
    </PrimaryLayout>
  );
};
