import React from "react";
import {
  Card,
  ResourceList,
  Avatar,
  ResourceItem,
  TextStyle,
  DisplayText,
  Banner,
} from "@shopify/polaris";
import { TSpeaker } from "../types";

interface Props {
  speakers: TSpeaker[];
}

const SpeakersTable: React.FC<Props> = ({ speakers }) => {
  const noSpeakersBannerMarkup = (
    <Banner title="No Speakers" onDismiss={() => {}} status="info"></Banner>
  );

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <DisplayText size="small">Speakers</DisplayText>
      </div>
      {speakers.length === 0 && noSpeakersBannerMarkup}
      <Card>
        <ResourceList
          resourceName={{ singular: "speaker", plural: "speakers" }}
          items={speakers}
          renderItem={(item: TSpeaker) => {
            const { name, profile_pic } = item;
            const media = (
              <Avatar
                customer
                size="medium"
                name={name}
                source={profile_pic}
                accessibilityLabel={name}
              />
            );

            return (
              <ResourceItem
                id={name}
                url=""
                media={media}
                accessibilityLabel={`Image of speaker: ${name}`}
              >
                <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>Speaker</div>
              </ResourceItem>
            );
          }}
        />
      </Card>
    </>
  );
};

export default SpeakersTable;
