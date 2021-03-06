import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { getEventById } from "../query/eventsQuery";
import { TEvent } from "../types";

import {
  Banner,
  Button,
  DisplayText,
  Layout,
  Page,
  Stack,
} from "@shopify/polaris";
import EventBadge from "./EventBadge";
import SpeakersTable from "./SpakersTable";
import RelatedEventContainer from "./RelatedEventContainer";
import SkeletonEvent from "./SkeletonEvent";

interface Props {
  isLoggedIn: boolean;
}

const Event: React.FC<Props> = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(getEventById(id ? id : ""));

  const errorMarkup = (
    <Banner title="Error" onDismiss={() => {}} status="critical">
      <p>There has been an error, please go back to the home page.</p>
    </Banner>
  );

  const event = data?.sampleEvent as TEvent;
  return (
    <div style={{ marginTop: "50px" }}>
      <Page>
        {loading && <SkeletonEvent />}
        {error && errorMarkup}
        {!loading && !error && (
          <Layout>
            <Layout.Section>
              <Stack vertical>
                <Stack.Item>
                  <DisplayText size="medium">{event?.name}</DisplayText>
                </Stack.Item>
                <Stack.Item>
                  <EventBadge eventType={event?.event_type} />
                </Stack.Item>
                <Stack.Item>{event?.description}</Stack.Item>
                <Stack.Item>
                  <RelatedEventContainer
                    relatedEvents={event?.related_events}
                  />
                </Stack.Item>
                <Stack.Item>
                  <Button
                    fullWidth
                    primary
                    external
                    url={
                      event?.permission === "private"
                        ? event?.private_url
                        : event?.public_url
                    }
                  >
                    Event Link
                  </Button>
                </Stack.Item>
              </Stack>
            </Layout.Section>
            <Layout.Section secondary>
              <SpeakersTable speakers={event?.speakers} />
            </Layout.Section>
          </Layout>
        )}
      </Page>
    </div>
  );
};

export default Event;
