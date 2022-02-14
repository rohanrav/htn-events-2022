export type TEventType = "workshop" | "activity" | "tech_talk";
export type TPermission = "public" | "private";

export type TSpeaker = {
  name: string;
  profile_pic?: string;
};

export type TEvent = {
  id: number;
  name: string;
  event_type: TEventType;
  permission?: TPermission;

  start_time: number;
  end_time: number;

  description?: string;
  speakers: TSpeaker[];

  public_url?: string;
  private_url: string;
  related_events: number[];
};

export type TEndpointResponse = TEvent | TEvent[];
export type ModalSortType = "TEL" | "TLE" | "AZ";
