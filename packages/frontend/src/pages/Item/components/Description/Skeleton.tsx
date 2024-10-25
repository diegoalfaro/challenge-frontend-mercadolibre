import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader viewBox="0 0 900 200">
      <rect x="0" y="0" rx="4" ry="4" width="300" height="40" />
      <rect x="0" y="70" rx="4" ry="4" width="900" height="130" />
    </ContentLoader>
  );
};

export default Skeleton;
