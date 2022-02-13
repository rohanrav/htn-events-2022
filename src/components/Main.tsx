import React, { useCallback, useEffect, useState } from "react";
import { Button, Heading, Layout, Page, Stack } from "@shopify/polaris";
import CardContainer from "./CardContainer";
import FilterModal from "./FilterModal";
import { ModalSortType, TEvent, TEventType } from "../types";

interface Props {
  events: TEvent[];
}

const Main: React.FC<Props> = ({ events }) => {
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

  useEffect(() => console.log(filterValues));

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
        <Stack>
          <Stack.Item fill>
            <Heading>Events</Heading>
          </Stack.Item>
          <Stack.Item>
            <Button onClick={() => setModalActive(true)}>Sort/Filter</Button>
          </Stack.Item>
        </Stack>
        <Layout>
          <CardContainer
            events={events}
            sortOption={sortValue}
            filterOptions={filterValues}
            isLoggedIn={true}
          />
        </Layout>
      </Page>
    </>
  );
};

export default Main;
