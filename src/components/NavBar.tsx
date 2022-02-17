import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActionList, TopBar } from "@shopify/polaris";
import { TEvent } from "../types";

interface Props {
  isLoggedIn: boolean;
  events: TEvent[];
  setLoggedInCallback: (loggedIn: boolean) => void;
}

const NavBar: React.FC<Props> = ({
  isLoggedIn,
  events,
  setLoggedInCallback,
}) => {
  const navigate = useNavigate();
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
      searchResults.filter(({ name, permission }) => {
        return name.toLowerCase().includes(value.toLowerCase());
      })
    );
  }, []);

  const secondaryUserMenuMarkup = (
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
    <div
      onClick={() =>
        isLoggedIn ? setLoggedInCallback(false) : navigate("/login")
      }
      className={`Polaris-Button Polaris-Button--${
        !isLoggedIn ? "primary" : "destructive"
      }`}
      role="button"
    >
      <span className="Polaris-Button__Content">
        <span className="Polaris-Button__Text">
          {isLoggedIn ? "Logout" : "Login"}
        </span>
      </span>
    </div>
  );

  const primaryUserMenuMarkup = (
    <TopBar.Menu
      activatorContent={authButtonMarkup}
      open={true}
      onOpen={() => {}}
      onClose={() => {}}
      actions={[]}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={searchResults.map(({ id, name }) => {
        return {
          content: name,
          onAction: () => {
            navigate(`/event/${id}`);
            handleSearchResultsDismiss();
          },
        };
      })}
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
      userMenu={primaryUserMenuMarkup}
      secondaryMenu={isLoggedIn && secondaryUserMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
    />
  );
};

export default NavBar;
