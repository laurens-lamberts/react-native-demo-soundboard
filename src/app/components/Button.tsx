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
import Video from 'react-native-video';

declare const global: { HermesInternal: null | {} };

const Button = ({ icon }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {
      console.log(player)
    }}>
      <Icon name={icon} size={30} color="#900" />
      <Video
        ref={(ref) => {
          player = ref
        }}
        source={{ uri: 'achteruit' }}
        audioOnly />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: 'tomato',
    height: 80,
    width: '30%',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Button