import React from "react";
import { BannerStatus, Badge } from "@shopify/polaris";
import { TEventType } from "../types";
import _ from "lodash";

interface Props {
  eventType: TEventType;
}

const EventBadge: React.FC<Props> = ({ eventType }) => {
  let color = "info";
  switch (eventType) {
    case "workshop":
      color = "new";
      break;
    case "activity":
      color = "critical";
      break;
    case "tech_talk":
      color = "warning";
      break;
  }

  return <Badge status={color as BannerStatus}>{_.startCase(eventType)}</Badge>;
};

export default EventBadge;
