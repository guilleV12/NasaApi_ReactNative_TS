/* eslint-disable prettier/prettier */
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import { RootStackParams } from '../../types';
import Header from '../../components/Header';
import { detailStyles } from '../../styles/appStyles';

const Details = () => {
  const {params: {title, url, explanation, date}} = useRoute<NativeStackScreenProps<RootStackParams, 'Details'>['route']>();

  return (
    <View style={detailStyles.container}>
      <Header />
      <View style={detailStyles.content}>
        <Image source={{ uri: url }} style={detailStyles.image}/>
        <Text style={detailStyles.title}>{title}</Text>
        <Text style={detailStyles.date}>{date}</Text>
        <ScrollView style={detailStyles.explanationContainer}>
          <Text style={detailStyles.explanation}>
            {explanation}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Details;
