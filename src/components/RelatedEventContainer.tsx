import React from "react";
import { Banner, DisplayText, List } from "@shopify/polaris";
import RelatedEvent from "./RelatedEvent";

interface Props {
  relatedEvents: number[];
}

const RelatedEventContainer: React.FC<Props> = ({ relatedEvents }) => {
  const noRelatedEventsBannerMarkup = (
    <Banner
      title="No Related Events"
      onDismiss={() => {}}
      status="info"
    ></Banner>
  );

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <DisplayText size="small">Related Events</DisplayText>
      </div>
      {relatedEvents.length === 0 && noRelatedEventsBannerMarkup}
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
