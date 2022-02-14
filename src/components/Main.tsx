import React, { useCallback, useState } from "react";
import { Button, DisplayText, Layout, Page, Stack } from "@shopify/polaris";
import CardContainer from "./CardContainer";
import FilterModal from "./FilterModal";
import { ModalSortType, TEvent, TEventType } from "../types";

interface Props {
  events: TEvent[];
  isLoggedIn: boolean;
}

const Main: React.FC<Props> = ({ events, isLoggedIn }) => {
  const [isModalActive, setModalActive] = useState(false);
  const [sortValue, setSortValue] = useState<ModalSortType>("TEL");
  const [filterValues, setFilterValues] = useState<TEventType[]>([
    "workshop",
    "activity",
    "tech_talk",
  ]);

  const sortOptionsCallback = useCallback((value) => setSortValue(value), []);
  const filterOptionsCallback = useCallback(
    (value) => setFilterValues(value),
    []
  );
  const toggleModal = useCallback(
    () => setModalActive((isModalActive) => !isModalActive),
    []
  );

  return (
    <>
      <FilterModal
        active={isModalActive}
        toggleModal={toggleModal}
        sortOption={sortValue}
        sortOptionsCallback={sortOptionsCallback}
        filterOptions={filterValues}
        filterOptionsCallback={filterOptionsCallback}
      ></FilterModal>
      <Page>
        <div style={{ padding: "7.5px 0" }}>
          <Stack>
            <Stack.Item fill>
              <DisplayText size="small">Events</DisplayText>
            </Stack.Item>
            <Stack.Item>
              <Button onClick={() => setModalActive(true)}>Sort/Filter</Button>
            </Stack.Item>
          </Stack>
        </div>
        <Layout>
          <CardContainer
            events={events}
            sortOption={sortValue}
            filterOptions={filterValues}
            isLoggedIn={isLoggedIn}
          />
        </Layout>
      </Page>
    </>
  );
};

export default Main;
