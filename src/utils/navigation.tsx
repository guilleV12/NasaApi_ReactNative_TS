/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import { PostImage, PostImageNavigationProps } from '../types';
import React, {FC} from 'react';
import { Button } from 'react-native';

export const HandleViewPress: FC<PostImage> = ({title, date, url, explanation}) => {
    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
      navigate('Details', {title, date, url, explanation});
    };

  return (
    <>
        <Button title="View" color={'rgba(7,26,93,255)'} onPress={handleViewPress}/>
    </>
  );
};
