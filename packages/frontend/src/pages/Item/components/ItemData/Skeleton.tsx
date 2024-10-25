import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader viewBox="0 0 400 190">
      <rect x="0" y="0" rx="4" ry="4" width="400" height="30" />
      <rect x="0" y="50" rx="4" ry="4" width="400" height="70" />
      <rect x="0" y="140" rx="4" ry="4" width="400" height="50" />
    </ContentLoader>
  );
};

export default Skeleton;
