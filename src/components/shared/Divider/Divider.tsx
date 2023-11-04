import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

interface DividerProps {
  style?: ViewStyle;
  color?: string;
  testID?: string;
}

const Divider: React.FC<DividerProps> = ({style, color, ...rest}) => {
  return (
    <View
      style={[styles.divider, style, {borderBottomColor: color}]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
});

export {Divider};
