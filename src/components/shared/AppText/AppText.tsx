import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

type AppTextProps = TextProps & {
  children: React.ReactNode;
  fontSize?: number;
  color?: string;
  fontWeight?: 'normal' | 'bold' | '600';
};

const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  fontSize = 16,
  color = 'white',
  fontWeight = 'normal',
  ...rest
}: AppTextProps) => {
  const textStyles = [styles.text, style, {fontSize, color, fontWeight}];

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
  },
});

export {AppText};
