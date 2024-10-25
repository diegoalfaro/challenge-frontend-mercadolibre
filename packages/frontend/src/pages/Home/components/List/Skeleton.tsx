import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader viewBox="0 0 1400 200">
      <rect x="0" y="0" rx="4" ry="4" width="200" height="200" />
      <rect x="230" y="10" rx="4" ry="4" width="200" height="30" />
      <rect x="230" y="50" rx="4" ry="4" width="700" height="40" />
      <rect x="1200" y="10" rx="4" ry="4" width="200" height="30" />
    </ContentLoader>
  );
};

export default Skeleton;
