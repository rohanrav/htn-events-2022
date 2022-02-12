import React from "react";
import { Button, Heading, Layout, Page, Stack } from "@shopify/polaris";
import CardContainer from "./CardContainer";
import { TEvent } from "src/types";

interface Props {
  events: TEvent[];
}

const Main: React.FC<Props> = ({ events }) => {
  return (
    <Page>
      <Stack>
        <Stack.Item fill>
          <Heading>Events</Heading>
        </Stack.Item>
        <Stack.Item>
          <Button>Sort/Filter</Button>
        </Stack.Item>
      </Stack>
      <Layout>
        <CardContainer events={events} />
      </Layout>
    </Page>
  );
};

export default Main;
