/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {View} from 'react-native';

import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import TodaysImage from '../../components/TodaysImage/TodaysImage';
import { PostImage } from '../../types';
import { format, sub } from 'date-fns';
import LastFiveDaysImages from '../../components/LastFiveDaysImages';
import { homeStyles } from '../../styles/appStyles';

const Home = () => {
  const [todaysImage,setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    loadTodaysImage().catch(null);

    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date();
        const yesterdayDate = format(sub(date, {days:1}), 'yyyy-MM-dd');
        const fiveDaysAgoToday = format(sub(date, {days:6}), 'yyyy-MM-dd');
        const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoToday}&end_date=${yesterdayDate}`);
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadLastFiveDaysImages().catch(null);
  },[]);

  return (
    <View style={homeStyles.container}>
      <Header />
      <TodaysImage {...todaysImage}/>
      <LastFiveDaysImages postImages={lastFiveDaysImages}/>
    </View>
  );
};

export default Home;
