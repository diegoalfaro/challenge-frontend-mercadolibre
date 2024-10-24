import { useMediaQuery } from "./media-query";
import * as screen from "@theme/theme.module.scss";

export enum ScreenSize {
  mobile,
  tabletPortrait,
  tabletLandscape,
  desktop,
}

export const useScreenSize = (): ScreenSize => {
  const isDesktopQuery = `(min-width: ${screen?.xlMin})`;
  const { matches: isDesktop } = useMediaQuery(isDesktopQuery);

  const isTabletLandscapeQuery = `(min-width: ${screen?.lgMin}) and (max-width: ${screen?.lgMax})`;
  const { matches: isTabletLandscape } = useMediaQuery(isTabletLandscapeQuery);

  const isTabletPortraitQuery = `(min-width: ${screen?.mdMin}) and (max-width: ${screen?.mdMax})`;
  const { matches: isTabletPortrait } = useMediaQuery(isTabletPortraitQuery);

  if (isDesktop) {
    return ScreenSize.desktop;
  } else if (isTabletLandscape) {
    return ScreenSize.tabletLandscape;
  } else if (isTabletPortrait) {
    return ScreenSize.tabletPortrait;
  }
  return ScreenSize.mobile;
};
