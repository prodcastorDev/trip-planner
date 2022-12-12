import { useCallback, useEffect, useState } from 'react';
import { Locations } from 'components/Locations/Locations';
import { Journeys } from 'components/Journeys/Journeys';
import { Input } from 'components/Input/Input';
import { Loader } from 'components/Loader/Loader';
import { getLocations } from 'services/location';
import { getJourneys } from 'services/journey';
import { Location } from 'types/Location';
import { Journey } from 'types/Journey';
import 'components/Homepage/Homepage.css';

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

  const handleGetJourneys = useCallback(async (): Promise<void> => {
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
        <Locations selectedId={fromLocationID} locations={locationsFrom} onCardClick={handleFromLocationID} />
      </>
    ) : null;

  const renderToLocations = (): JSX.Element | null =>
    locationsTo.length ? (
      <>
        <h1>To</h1>
        <Locations selectedId={toLocationID} locations={locationsTo} onCardClick={handleToLocationID} />
      </>
    ) : null;

  const renderForm = (): JSX.Element => (
    <div className="form container d-flex justify-content-around align-items-center">
      <Input type="text" heading="From" placeholder="From" onChange={handlelocationFromChange} />
      <Input type="text" heading="To" placeholder="To" onChange={handlelocationToChange} />
      <Input
        type="datetime-local"
        heading="Departure Time"
        placeholder="Departure Time"
        onChange={handleDateTimeChange}
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
      void handleGetJourneys();
    }
  }, [departureTime, fromLocationID, handleGetJourneys, toLocationID]);

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
