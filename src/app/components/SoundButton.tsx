import React from 'react';
import {StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onPress: () => void;
  icon: string;
}

const SoundButton = ({onPress, icon}: Props) => {
  const {width} = useWindowDimensions();
  const BUTTON_WIDTH = width * 0.3;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        elevation: 10,
        width: BUTTON_WIDTH,
        height: BUTTON_WIDTH,
        borderRadius: BUTTON_WIDTH / 2,
        marginBottom: width * 0.025,
      }}
      onPress={onPress}>
      <Icon name={icon} size={48} color="#900" />
    </TouchableOpacity>
  );
};

export default SoundButton;
