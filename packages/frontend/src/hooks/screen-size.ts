import { useMediaQuery } from "./media-query";
import * as theme from "@theme/theme.module.scss";

export enum ScreenSize {
  mobile,
  tabletPortrait,
  tabletLandscape,
  desktop,
}

export const useScreenSize = (): ScreenSize => {
  const isDesktopQuery = `(min-width: ${theme?.xlMin})`;
  const { matches: isDesktop } = useMediaQuery(isDesktopQuery);

  const isTabletLandscapeQuery = `(min-width: ${theme?.lgMin}) and (max-width: ${theme?.lgMax})`;
  const { matches: isTabletLandscape } = useMediaQuery(isTabletLandscapeQuery);

  const isTabletPortraitQuery = `(min-width: ${theme?.mdMin}) and (max-width: ${theme?.mdMax})`;
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
