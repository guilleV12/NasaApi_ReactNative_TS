import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from './src/routes/Routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    paddingTop: 0,
  },
});

export default App;
