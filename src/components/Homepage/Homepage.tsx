import './Homepage.css';
import { useCallback, useEffect, useState } from 'react';
import { Location } from '../../types/Location';
import { Journeys } from '../Journeys/Journeys';
import { Locations } from '../Locations/Locations';
import { getLocations } from '../../services/location';
import { getJourneys } from '../../services/journey';
import { Journey } from '../../types/Journey';
import { Input } from '../Input/Input';
import { Loader } from '../Loader/Loader';

export const Homepage = (): JSX.Element => {
  const [locationsFrom, setLocationsFrom] = useState<Location[]>([]);
  const [locationsTo, setLocationsTo] = useState<Location[]>([]);
  const [departureTime, setDepartureTime] = useState<string>('');
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [fromLocationID, setFromLocationID] = useState<string>('');
  const [toLocationID, setToLocationID] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handlelocationFromChange = async (event: { target: { value: string } }) => {
    if (event.target.value.length) {
      setLoading(true);
      const { data }: { data: Location[] } = await getLocations({ query: event.target.value });
      setLoading(false);
      setLocationsFrom(data);
    }
  };

  const handlelocationToChange = async (event: { target: { value: string } }) => {
    if (event.target.value.length) {
      setLoading(true);
      const { data }: { data: Location[] } = await getLocations({ query: event.target.value });
      setLoading(false);
      setLocationsTo(data);
    }
  };

  const handleJourney = useCallback(async (): Promise<void> => {
    const {
      data: { journeys },
    }: { data: { journeys: Journey[] } } = await getJourneys({
      from: fromLocationID,
      to: toLocationID,
      departure: departureTime,
    });
    setLoading(false);
    setJourneys(journeys);
  }, [departureTime, fromLocationID, toLocationID]);

  const handleDateTimeChange = (event: { target: { value: string } }): void => {
    setDepartureTime(event.target.value);
  };

  const handleFromLocationID = (id: string): void => {
    setFromLocationID(id);
  };

  const handleToLocationID = (id: string): void => {
    setToLocationID(id);
  };

  const renderFromLocations = (): JSX.Element | null =>
    locationsFrom.length ? (
      <>
        <h1>From</h1>
        <Locations selectedId={fromLocationID} locations={locationsFrom} handleOnCardClick={handleFromLocationID} />
      </>
    ) : null;

  const renderToLocations = (): JSX.Element | null =>
    locationsTo.length ? (
      <>
        <h1>To</h1>
        <Locations selectedId={toLocationID} locations={locationsTo} handleOnCardClick={handleToLocationID} />
      </>
    ) : null;

  const renderForm = (): JSX.Element => (
    <div className="form container d-flex justify-content-around align-items-center">
      <Input type="text" heading="From" placeholder="From" handleOnChange={handlelocationFromChange} />
      <Input type="text" heading="To" placeholder="To" handleOnChange={handlelocationToChange} />
      <Input
        type="datetime-local"
        heading="Departure Time"
        placeholder="Departure Time"
        handleOnChange={handleDateTimeChange}
      />
    </div>
  );

  const renderJourneys = (): JSX.Element | null =>
    journeys.length ? (
      <>
        <h1>Journeys</h1>
        <Journeys journeys={journeys} />
      </>
    ) : null;

  useEffect(() => {
    if (!!fromLocationID && !!toLocationID && !!departureTime) {
      setLoading(true);
      void handleJourney();
    }
  }, [departureTime, fromLocationID, handleJourney, toLocationID]);

  return (
    <>
      {loading && <Loader />}
      <div className="container">
        {renderForm()}

        {renderFromLocations()}

        {renderToLocations()}

        {renderJourneys()}
      </div>
    </>
  );
};
