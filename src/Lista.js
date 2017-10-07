import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  labelText: {
    borderWidth: 1,
    borderColor: 'blue',
    fontSize: 22,
  },
});

const Lista = ({ elements }) => (
  <View>
    {elements.map(({ label, id }) => (
      <Text key={id} style={styles.labelText}>
        -&gt; {label}
      </Text>
    ))}
  </View>
);
Lista.propTypes = {
  elements: PropTypes.array.isRequired,
};

export default Lista;
