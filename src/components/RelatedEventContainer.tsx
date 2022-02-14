import React from "react";
import { DisplayText, List } from "@shopify/polaris";
import RelatedEvent from "./RelatedEvent";

interface Props {
  relatedEvents: number[];
}

const RelatedEventContainer: React.FC<Props> = ({ relatedEvents }) => {
  return (
    <>
      <DisplayText size="small">Related Events</DisplayText>
      <List>
        {relatedEvents.map((id) => (
          <List.Item key={id}>
            <RelatedEvent eventId={id} />
          </List.Item>
        ))}
      </List>
    </>
  );
};

export default RelatedEventContainer;
