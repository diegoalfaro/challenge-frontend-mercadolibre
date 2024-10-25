import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader viewBox="0 0 380 240">
      <rect x="0" y="0" rx="4" ry="4" width="380" height="240" />
    </ContentLoader>
  );
};

export default Skeleton;
