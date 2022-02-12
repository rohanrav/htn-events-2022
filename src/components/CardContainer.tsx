import { Layout, Card } from "@shopify/polaris";
import _ from "lodash";
import React from "react";
import { TEvent } from "../types";
import EventBadge from "./EventBadge";

interface Props {
  events: TEvent[];
}

const CardContainer: React.FC<Props> = ({ events }) => {
  return (
    <>
      {events.map(
        ({
          id,
          name,
          event_type,
          public_url,
          private_url,
          permission,
          description,
        }) => {
          const formattedDescription = description ? description : "";
          const formattedUrl =
            permission == "public" ? public_url : private_url;
          return (
            <Layout.Section key={id} oneThird>
              <Card
                title={`${name.substring(0, 27)}${
                  name.length > 27 ? "..." : ""
                }`}
                primaryFooterAction={{
                  content: "More Info",
                  url: formattedUrl,
                }}
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
      )}
    </>
  );
};

export default CardContainer;
