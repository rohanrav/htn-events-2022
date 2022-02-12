import React, { useCallback, useState } from "react";
import { ActionList, AppProvider, Frame, TopBar } from "@shopify/polaris";
import { TEvent } from "../types";
import { User } from "../user";

interface Props {
  isLoggedIn: boolean;
  events: TEvent[];
  user: User | null;
}

const NavBar: React.FC<Props> = ({ isLoggedIn, events, user }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<TEvent[]>(events);

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
    setSearchResults(events);
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
    setSearchResults(
      searchResults.filter((event) => event.name.includes(searchValue))
    );
  }, []);

  const theme = {
    logo: {
      width: 32,
      topBarSource: "https://hackthenorth.com/favicon-32x32.png",
      url: "/",
      accessibilityLabel: "HackTheNorth Events",
    },
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[]}
      name="John Doe"
      detail="Events"
      initials="JD"
      open={false}
      onToggle={() => {}}
    />
  );

  const authButtonMarkup = (
    <a
      className={`Polaris-Button Polaris-Button--${
        !isLoggedIn ? "primary" : "destructive"
      }`}
      type="button"
    >
      <span className="Polaris-Button__Content">
        <span className="Polaris-Button__Text">
          {isLoggedIn ? "Log out" : "Log in"}
        </span>
      </span>
    </a>
  );

  const searchResultsMarkup = (
    <ActionList
      items={searchResults.map((event) => {
        return { content: event.name };
      })}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search Events"
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={
        <TopBar.Menu
          activatorContent={authButtonMarkup}
          open={true}
          onOpen={() => {}}
          onClose={() => {}}
          actions={[]}
        />
      }
      secondaryMenu={isLoggedIn && userMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
    />
  );

  return (
    <div style={{ height: "250px" }}>
      <AppProvider theme={theme} i18n={{}}>
        <Frame topBar={topBarMarkup} />
      </AppProvider>
    </div>
  );
};

export default NavBar;
