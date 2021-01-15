/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './src/app/components/Button';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ padding: '5%'}}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <Button icon='rocket' />
            <Button icon='crosshairs' />
            <Button icon='photo' />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
