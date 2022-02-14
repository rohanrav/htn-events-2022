import React from "react";
import {
  Card,
  ResourceList,
  Avatar,
  ResourceItem,
  TextStyle,
  DisplayText,
} from "@shopify/polaris";
import { TSpeaker } from "../types";

interface Props {
  speakers: TSpeaker[];
}

const SpeakersTable: React.FC<Props> = ({ speakers }) => {
  return (
    <>
      <DisplayText size="small">Speakers</DisplayText>
      <Card>
        <ResourceList
          resourceName={{ singular: "speaker", plural: "speakers" }}
          items={speakers}
          renderItem={(item: TSpeaker) => {
            const { name, profile_pic } = item;
            const media = (
              <Avatar customer size="medium" name={name} source={profile_pic} />
            );

            return (
              <ResourceItem
                id={name}
                url=""
                media={media}
                accessibilityLabel={`View details for ${name}`}
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
