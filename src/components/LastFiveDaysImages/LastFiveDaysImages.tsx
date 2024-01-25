/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import {ScrollView, Text, View} from 'react-native';

import PostImage from '../PostImage';
import { PostImage as PostImagesTypes} from '../../types';
import { last5DaysStyles } from '../../styles/appStyles';

const LastFiveDaysImages:FC<{postImages?:PostImagesTypes[]}> = ({postImages}) => {
  return (
    <View style={last5DaysStyles.container}>
      <Text style={last5DaysStyles.title}> Last 5 days </Text>
      <ScrollView style={last5DaysStyles.content}>
        {postImages?.map((image)=>(
            <PostImage key={`post-images-${image.title}`} {...image} title={image.title} date={image.date} url={image.url} explanation={image.explanation}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default LastFiveDaysImages;
