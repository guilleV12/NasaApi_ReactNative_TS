/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { PostImage as PostImageTypes } from '../../types';
import { HandleViewPress } from '../../utils/navigation';
import { containerPrincipalStyles } from '../../styles/appStyles';

const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {

    return (
        <View style={containerPrincipalStyles.container}>
            <Text style={containerPrincipalStyles.title}>{title}</Text>
            <Text style={containerPrincipalStyles.date}>{date}</Text>
            <View style={containerPrincipalStyles.buttonContainer}>
                <HandleViewPress title={title} date={date} url={url} explanation={explanation} />
            </View>
        </View>
    );
};

export default PostImage;
