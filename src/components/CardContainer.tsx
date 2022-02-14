import React from "react";
import { useNavigate } from "react-router-dom";

import _ from "lodash";

import { Layout, Card, Banner } from "@shopify/polaris";
import EventBadge from "./EventBadge";

import { ModalSortType, TEvent, TEventType } from "../types";

interface Props {
  events: TEvent[];
  sortOption: ModalSortType;
  filterOptions: TEventType[];
  isLoggedIn: boolean;
}

const CardContainer: React.FC<Props> = ({
  events,
  sortOption,
  filterOptions,
  isLoggedIn,
}) => {
  const navigate = useNavigate();
  const sortedEvents = [...events];

  sortedEvents.sort((e1, e2) => {
    if (sortOption === "AZ") {
      return e1.name.charCodeAt(0) - e2.name.charCodeAt(0);
    } else if (sortOption === "TLE") {
      return e2.start_time - e1.start_time;
    } else {
      return e1.start_time - e2.start_time;
    }
  });

  const renderedEvents = _.compact(
    sortedEvents.map(
      ({
        id,
        name,
        event_type,
        public_url,
        private_url,
        permission,
        description,
      }) => {
        if (
          !filterOptions.includes(event_type) ||
          (!isLoggedIn && permission == "private")
        )
          return;
        const formattedDescription = description ? description : "";
        const formattedUrl = permission == "public" ? public_url : private_url;
        return (
          <Layout.Section key={id} oneThird>
            <Card
              title={`${name.substring(0, 27)}${name.length > 27 ? "..." : ""}`}
              primaryFooterAction={{
                content: "More Info",
                onAction: () => navigate(`/event/${id}`),
              }}
              secondaryFooterActions={[
                {
                  content: "Event Link",
                  url: formattedUrl,
                },
              ]}
            >
              <Card.Section>
                <EventBadge eventType={event_type} />
              </Card.Section>
              <Card.Section>
                <p>{`${description?.substring(0, 100)}${
                  formattedDescription.length > 100 ? "..." : ""
                }`}</p>
              </Card.Section>
            </Card>
          </Layout.Section>
        );
      }
    )
  );

  const noResultsBanner = (
    <Banner title="No Results" onDismiss={() => {}} status="warning">
      <p>
        There are no events that exist for the options selected. Please modify
        your filter criteria above.
      </p>
    </Banner>
  );

  return <>{renderedEvents.length > 0 ? renderedEvents : noResultsBanner}</>;
};

export default CardContainer;
