import React from 'react';
import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../../typing/enums/colors.ts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface PrimeryWrapperProps {
  children: React.ReactNode;
  wrapperStyle?: ViewStyle;
  contentStyle?: ViewStyle;
}

export const PrimaryWrapper = ({
  children,
  wrapperStyle,
  contentStyle,
}: PrimeryWrapperProps) => {
  return (
    <SafeAreaView style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.content, contentStyle]}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.mainWhite,
    flex: 1,
  },
  content: {
    marginHorizontal: 16,
    flex: 1,
  },
});
