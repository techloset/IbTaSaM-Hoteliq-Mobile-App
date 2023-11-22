import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function AccountprofileScreenScreen() {
  return (
    <View style={style.header}>
      <Text style={style.title}>Profile Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
});
