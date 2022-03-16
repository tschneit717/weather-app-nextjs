import type { NextPage } from 'next';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card/Card';
import { Footer } from '../components/Footer/Footer';
import { Grid } from '../components/Grid/Grid';
import { Header } from '../components/Header/Header';
import styles from '../styles/Home.module.scss';
import coordinatesResponse from './../utils';

const Home: NextPage = () => {
  const [weatherData, setWeatherData] = useState<any>({});
  const [coordinates, getCoordinates] = useState({ lat: 0, lon: 0 });
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({
      lat: coordinates.lat,
      lon: coordinates.lon,
    }),
  };
  useEffect(() => {
    const fetchData = async () => {
      console.log(coordinatesResponse);
      // getCoordinates(coordinatesResponse);
      try {
        const response = await fetch('/api/weather', options).then((res) => {
          console.log(res);
          res.json();
        });
        console.log(response);
        setWeatherData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Grid>
        <Card title='Weather'></Card>
        <Card title='Search'></Card>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
