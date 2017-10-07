import React from 'react';
import { StyleSheet, View } from 'react-native';

import Lista from './src/Lista';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Lista
          elements={[
            {
              label: 'a1',
              id: 1,
            },
            {
              label: 'b',
              id: 2,
            },
          ]}
        />
      </View>

    );
  }
}
