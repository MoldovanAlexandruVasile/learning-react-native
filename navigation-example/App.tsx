import AppBottomTabs from "./AppBottomTabs";
import AppDrawer from "./AppDrawer";

const DRAWER_NAV = "drawer";
const BOTTOM_TABS_NAV = "bottom-tabs";

type NavType = typeof DRAWER_NAV | typeof BOTTOM_TABS_NAV;

const selectedNavType: NavType = BOTTOM_TABS_NAV as NavType;

const App = () => {
  switch (selectedNavType) {
    case BOTTOM_TABS_NAV:
      return <AppBottomTabs />;
    case DRAWER_NAV:
    default:
      return <AppDrawer />;
  }
};

export default App;
