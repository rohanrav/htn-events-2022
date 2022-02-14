import React from "react";
import {
  SkeletonPage,
  Layout,
  Card,
  SkeletonBodyText,
  TextContainer,
  SkeletonDisplayText,
  Stack,
} from "@shopify/polaris";

const SkeletonEvent: React.FC<{}> = () => {
  return (
    <SkeletonPage primaryAction>
      <Layout>
        <Layout.Section>
          <Stack vertical>
            <Stack.Item>
              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>
            </Stack.Item>
            <Card sectioned>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText />
              </TextContainer>
            </Card>
            <Stack.Item>
              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>
            </Stack.Item>
          </Stack>
        </Layout.Section>
        <Layout.Section secondary>
          <Card subdued>
            <Card.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </Card.Section>
            <Card.Section>
              <SkeletonBodyText lines={2} />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
};

export default SkeletonEvent;
