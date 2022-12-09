import { Journey } from '../../types/Journey';
import { Leg } from '../../types/Leg';
import './Journeys.css';

interface Props {
  journeys: Journey[];
}

export const Journeys = ({ journeys }: Props): JSX.Element => {
  return (
    <>
      {journeys.map((journey: Journey) => (
        <div key={Math.random()} className="d-flex flex-wrap justify-content-start align-items-center">
          {journey.legs.map((leg: Leg) => (
            <div className="journey-card card text-center" key={leg.tripId}>
              <div className="card-header">Price: {journey?.price?.amount}</div>
              <div className="card-body d-flex flex-column align-items-start">
                <h5 className="card-title">From: {leg.origin.name}</h5>
                <p className="card-text">Arrival: {leg.arrival}</p>
                <p className="card-text">Departure: {leg.departure}</p>
                <p className="card-text">Mode: {leg?.line?.productName}</p>
                <p className="card-text">Through: {leg?.line?.name}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
