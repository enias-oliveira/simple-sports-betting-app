import { useApp } from "./use-app";

export const App = () => {
  const { events } = useApp();

  return (
    <div>
      <div>
        {events.map(
          (sportEvent) =>
            sportEvent.markets[0] && (
              <div key={sportEvent.id}>
                <div>
                  <span>{sportEvent.name}</span>
                </div>
                {sportEvent.markets.map((market) => (
                  <div key={market.id}>
                    {market.name}
                    <div className="flex">
                      {market.selections.map((selection) => (
                        <button key={selection.id} className="flex flex-col">
                          <div>{selection.name}</div>
                          <div>{selection.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
      <div>
        <div>Selections</div>
      </div>
    </div>
  );
};
