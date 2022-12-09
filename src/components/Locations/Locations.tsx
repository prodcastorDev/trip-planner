import { Location } from '../../types/Location';

interface Props {
  locations: Location[];
  handleOnCardClick: (id: string) => void;
  selectedId: string;
}

export const Locations = ({ locations, handleOnCardClick, selectedId }: Props): JSX.Element => {
  return (
    <div className="container d-flex justify-content-around d-flex align-items-center">
      {locations.map((location: Location) =>
        location.type === 'stop' ? (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            className={`card text-center ${selectedId === location.id ? 'bg-success text-light' : 'bg-light'}`}
            key={location.id}
            onClick={() => handleOnCardClick(location.id)}
            onKeyDown={() => handleOnCardClick(location.id)}
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
