/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const containerPrincipalStyles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },
    title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
    },
    date: {
        color: '#fff',
    },
    buttonContainer: {
        alignItems: 'flex-end',
    },
});

export const detailStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(7,26,93,255)',
      },
      content: {
        backgroundColor: '#2c449d',
        marginVertical: 24,
        borderRadius: 32,
        padding: 16,
        flex: 1,
      },
      image:{
        borderRadius: 32,
        borderWidth: 2,
        width: '100%',
        height: '50%',
        borderColor: '#fff',
        marginBottom: 16,
      },
      title:{
        color: '#fff',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
      },
      date:{
        fontSize: 16,
        color: '#fff',
      },
      explanationContainer:{
        marginVertical: 16,
      },
      explanation:{
        color: '#fff',
        fontSize: 16,
      },
});

export const todaysImageStyles = StyleSheet.create({
    container:{
      backgroundColor: '#2c449d',
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 32,
      padding: 16,
    },
    image:{
      borderRadius: 32,
      borderWidth: 2,
      width: '100%',
      height: 190,
      borderColor: '#fff',
    },
    title:{
      color: '#fff',
      fontSize: 20,
      marginVertical: 12,
      fontWeight: 'bold',
    },
    date:{
      fontSize: 16,
      color: '#fff',
    },
    buttonContainer:{
      alignItems: 'flex-end',
    },
  });

export const last5DaysStyles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 8,
    },
    title: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 18,
    },
    content: {
        paddingHorizontal: 24,
    },
});

export const homeStyles = StyleSheet.create({
    container:{
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(7,26,93,255)',
    },
  });

export const headerStyles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftContainer:{
      flex: 1,
      alignItems: 'flex-start',
    },
    rightContainer:{
      flex: 1,
      alignItems: 'flex-end',
    },
    title:{
      fontSize: 20,
      color: '#fff',
    },
    image:{
      width: 60,
      height: 60,
    },
  });
