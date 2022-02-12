import React, { useCallback, useState } from "react";
import { ActionList, TopBar } from "@shopify/polaris";
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

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
    setSearchResults(
      searchResults.filter(({ name }) => name.includes(value.toLowerCase()))
    );
  }, []);

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
      items={searchResults.map(
        ({ name, public_url, private_url, permission }) => {
          return {
            content: name,
            url: permission == "public" ? public_url : private_url,
          };
        }
      )}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  return (
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
};

export default NavBar;
