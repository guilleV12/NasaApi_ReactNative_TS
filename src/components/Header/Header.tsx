/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image} from 'react-native';
import { headerStyles } from '../../styles/appStyles';

const Header = () => {
  return (
    <View style={headerStyles.container}>
        <View style={headerStyles.leftContainer}>
            <Text style={headerStyles.title}>Explore</Text>
        </View>
        <View style={headerStyles.rightContainer}>
            <Image source={require('../../assets/nasalogo.png')} style={headerStyles.image} />
        </View>
    </View>
  );
};

export default Header;
