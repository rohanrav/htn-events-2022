import { gql } from "@apollo/client";

export const getEventById = (id: number) => gql`
  query {
    sampleEvent(id: ${id}) {
        id
        name
        event_type
        permission
        start_time
        end_time
        description
        speakers {
          name
          profile_pic
        }
        public_url
        private_url
        related_events
    }
  }
`;

export const getAllEvents = gql`
  query {
    sampleEvents {
      id
      name
      event_type
      permission
      start_time
      end_time
      description
      speakers {
        name
        profile_pic
      }
      public_url
      private_url
      related_events
    }
  }
`;
