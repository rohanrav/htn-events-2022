import React from "react";
import { ChoiceList, Modal, Select, Stack } from "@shopify/polaris";
import { ModalSortType, TEventType } from "../types";

interface Props {
  active: boolean;
  toggleModal: () => void;
  filterOptions: TEventType[];
  sortOption: ModalSortType;
  filterOptionsCallback: (value: TEventType[]) => void;
  sortOptionsCallback: (value: ModalSortType) => void;
}

const FilterModal: React.FC<Props> = ({
  active,
  toggleModal,
  sortOption,
  sortOptionsCallback,
  filterOptions,
  filterOptionsCallback,
}) => {
  return (
    <Modal
      open={active}
      onClose={toggleModal}
      title="Sort/Filter"
      primaryAction={{
        content: "Close",
        onAction: toggleModal,
      }}
    >
      <Modal.Section>
        <Stack vertical>
          <Stack.Item>
            <Select
              label="Sort By"
              options={[
                { label: "Time: Early-Late", value: "TEL" },
                { label: "Time: Late-Early", value: "TLE" },
                { label: "A-Z", value: "AZ" },
              ]}
              value={sortOption}
              onChange={sortOptionsCallback}
            />
          </Stack.Item>
          <Stack.Item>
            <ChoiceList
              allowMultiple
              title="Filter"
              choices={[
                { label: "Type: Workshop", value: "workshop" },
                { label: "Type: Activity", value: "activity" },
                { label: "Type: Tech Talk", value: "tech_talk" },
              ]}
              selected={filterOptions}
              onChange={filterOptionsCallback}
            />
          </Stack.Item>
        </Stack>
      </Modal.Section>
    </Modal>
  );
};

export default FilterModal;
