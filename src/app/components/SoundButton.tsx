import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  sound: any;
  icon: string;
}

const SoundButton = ({ icon, sound }: Props) => {
  const BUTTON_SIZE = 114;
  const margin = 12;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowRadius: 10,
        shadowOpacity: 0.2,
        elevation: 10,
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: BUTTON_SIZE / 4,
        marginLeft: margin,
        marginBottom: margin,
      }}
      onPress={() => {
        if (!sound) {
          return;
        }

        if (sound.isPlaying()) {
          sound.stop();
        }

        sound.play((success: boolean) => {
          if (success) {
            console.log("successfully finished playing");
          } else {
            console.log("playback failed due to audio decoding errors");
          }
        });
      }}
    >
      <Icon name={icon} size={BUTTON_SIZE / 2} color="#900" />
    </TouchableOpacity>
  );
};

export default SoundButton;
