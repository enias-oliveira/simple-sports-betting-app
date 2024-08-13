/** Event Entity */
export type EventType = {
  id: string;
  name: string;
  markets: MarketType[];
};

/** Market Entity */
export type MarketType = {
  id: string;
  name: string;
  selections: SelectionType[];
};

/** Selection Entity */
export type SelectionType = {
  id: string;
  name: string;
  price: number;
};

export type ResponseType = EventType[];
