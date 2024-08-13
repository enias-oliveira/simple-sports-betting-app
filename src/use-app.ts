import { useState } from "react";
import { ResponseType, SelectionType } from "./types";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { addSelection, selectSelections } from "./store/slices/selectionsSlice";

export const useApp = () => {
  const [events] = useState<ResponseType>([
    {
      id: "EVT_1",
      name: "Real Madrid vs Barcelona",
      markets: [
        {
          id: "MKT_1",
          name: "Team to Win",
          selections: [
            {
              id: "SEL_1",
              name: "Real Madrid",
              price: 1.23,
            },
            {
              id: "SEL_2",
              name: "Barcelona",
              price: 2.05,
            },
          ],
        },
        {
          id: "MKT_2",
          name: "Player to Score First",
          selections: [
            {
              id: "SEL_3",
              name: "Ronaldo",
              price: 1.15,
            },
            {
              id: "SEL_4",
              name: "Messi",
              price: 1.3,
            },
            {
              id: "SEL_5",
              name: "Bale",
              price: 1.35,
            },
          ],
        },
      ],
    },
    {
      id: "EVT_2",
      name: "Atletico Madrid vs Malaga",
      markets: [
        {
          id: "MKT_3",
          name: "Team to Win",
          selections: [
            {
              id: "SEL_6",
              name: "Atletico",
              price: 1.4,
            },
            {
              id: "SEL_7",
              name: "Malaga",
              price: 3.05,
            },
          ],
        },
      ],
    },
    {
      id: "EVT_3",
      name: "Empty Event that shouldn't render",
      markets: [],
    },
  ]);

  const selections = useAppSelector(selectSelections);

  const dispatch = useAppDispatch();

  const handleAddSelection = (selection: SelectionType) =>
    dispatch(addSelection(selection));

  return { events, selections, handleAddSelection };
};
