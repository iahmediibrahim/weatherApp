import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ViewStyle,
  StatusBarStyle,
  View,
} from 'react-native';
import {AppText} from '../AppText';
import {addTestId} from '../../../utils';

interface AppTemplateProps {
  children: React.ReactNode;
  backgroundStyle?: ViewStyle;
  statusBarStyle?: StatusBarStyle;
  title: string;
  subTitle?: string;
}

const AppTemplate: React.FC<AppTemplateProps> = ({
  children,
  backgroundStyle,
  statusBarStyle,
  title,
  subTitle,
}) => {
  return (
    <SafeAreaView
      style={[styles.backgroundStyle, backgroundStyle]}
      {...addTestId('app-template')}>
      <StatusBar
        barStyle={statusBarStyle || 'light-content'}
        backgroundColor={backgroundStyle?.backgroundColor || 'transparent'}
      />
      <View style={{padding: 16}}>
        <AppText {...addTestId('screen-title')} fontSize={24} fontWeight="bold">
          {title}
        </AppText>
        {subTitle ? (
          <AppText {...addTestId('screen-subtitle')} fontSize={14}>
            {subTitle}
          </AppText>
        ) : null}
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = {
  backgroundStyle: {
    flex: 1,
    // Default background styles if not provided as props
  },
};

export {AppTemplate};
