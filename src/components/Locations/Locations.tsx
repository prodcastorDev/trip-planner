import { Location } from 'types/Location';

interface LocationsProps {
  locations: Location[];
  onCardClick: (id: string) => void;
  selectedId: string;
}

export const Locations = ({ locations, onCardClick, selectedId }: LocationsProps): JSX.Element => {
  return (
    <div className="container d-flex justify-content-around d-flex align-items-center">
      {locations.map((location: Location) =>
        location.type === 'stop' ? (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className={`card text-center ${selectedId === location.id ? 'bg-success text-light' : 'bg-light'}`}
            key={location.id}
            onClick={() => onCardClick(location.id)}
            onKeyDown={() => onCardClick(location.id)}
          >
            <div className="card-header">{location.name}</div>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
