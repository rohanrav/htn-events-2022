import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { TEvent } from "../types";

import { getEventById } from "../query/eventsQuery";
import { SkeletonBodyText, TextStyle } from "@shopify/polaris";

interface Props {
  eventId: number;
}

const RelatedEvent: React.FC<Props> = ({ eventId }) => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(getEventById(`${eventId}`));

  if (loading) {
    return <SkeletonBodyText />;
  } else if (error) {
    return <></>;
  }

  const event = data.sampleEvent as TEvent;
  return (
    <div
      onClick={() => navigate(`/event/${eventId}`)}
      style={{ cursor: "pointer" }}
    >
      <h3>
        <TextStyle variation="strong">{event?.name}</TextStyle>
      </h3>
      <div>{new Date(event?.start_time).toDateString()}</div>
    </div>
  );
};

export default RelatedEvent;
