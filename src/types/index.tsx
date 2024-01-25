/* eslint-disable prettier/prettier */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PostImage = {
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};

export type RootStackParams = {
  Home: undefined,
  Details: PostImage,
};

export type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Details'>;
