import React, {FC, ReactNode} from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';

import {dirProps} from '@cib/translator';

interface IProps extends ViewStyle, Partial<dirProps> {
  children: ReactNode;
  gap?: number;
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  testID?: string;
}

const Row: FC<IProps> = React.memo(
  ({children, testID, gap, justifyContent, alignItems, ...rest}) => (
    <View
      style={[
        styles.rowContainer,
        {flexDirection: 'row'},
        gap && {marginHorizontal: gap}, // You can adjust margin as needed
        justifyContent && {justifyContent},
        alignItems && {alignItems},
        {...rest},
      ]}
      testID={testID}
      accessibilityLabel={testID}>
      {children}
    </View>
  ),
);

const styles = StyleSheet.create({
  rowContainer: {
    // Default styles for your row container
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export {Row};
