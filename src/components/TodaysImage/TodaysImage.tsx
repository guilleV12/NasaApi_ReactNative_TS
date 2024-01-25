/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';

import { PostImage } from '../../types';
import { HandleViewPress } from '../../utils/navigation';
import { todaysImageStyles } from '../../styles/appStyles';

const TodaysImage: FC<PostImage> = ({date, title, url, explanation}) => {

  return (
    <View style={todaysImageStyles.container}>
      <Image source={{ uri:url }} style={todaysImageStyles.image}/>
      <Text style={todaysImageStyles.title}>{title}</Text>
      <Text style={todaysImageStyles.date}>{date}</Text>
      <View style={todaysImageStyles.buttonContainer}>
        <HandleViewPress title={title} date={date} url={url} explanation={explanation} />
      </View>
    </View>
  );
};

export default TodaysImage;
