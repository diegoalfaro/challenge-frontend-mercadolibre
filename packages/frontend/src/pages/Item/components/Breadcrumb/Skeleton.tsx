import { ScreenSize, useScreenSize } from "@hooks/screen-size";
import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  const screenSize = useScreenSize();
  const height = screenSize >= ScreenSize.tabletLandscape ? 16 : 32;
  return (
    <ContentLoader viewBox={`0 0 520 ${height}`}>
      <rect x="0" y="0" rx="4" ry="4" width="520" height={height} />
    </ContentLoader>
  );
};

export default Skeleton;
