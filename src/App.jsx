import { Selections } from "./Selections";
import { useApp } from "./use-app";

export const App = () => {
  const { events, handleAddSelection } = useApp();

  return (
    <div className="flex flex-col items-center justify-around gap-6  pt-4 px-2">
      <div className="flex flex-col items-center justify-around gap-4">
        {events.map(
          (sportEvent) =>
            sportEvent.markets[0] && (
              <div key={sportEvent.id}>
                <div className="border-solid border border-gray-500 p-4">
                  <span>{sportEvent.name}</span>
                </div>

                <div className="border-solid border border-gray-500">
                  {sportEvent.markets.map((market) => (
                    <div key={market.id} className="border-2 border-gray-500">
                      <div className="font-thin">{market.name}</div>

                      <div className="flex justify-between gap-8 p-2">
                        {market.selections.map((selection) => (
                          <button
                            key={selection.id}
                            className="flex-1 flex-col border rounded text-[0.5rem] hover:bg-green-500 focus:outline-none"
                            onClick={() => handleAddSelection(selection)}
                          >
                            <div>{selection.name}</div>
                            <div>{selection.price}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
      <Selections />
    </div>
  );
};
