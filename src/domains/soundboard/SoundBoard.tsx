import React from "react";
import SoundButton from "../../app/components/SoundButton";
import { Platform, SafeAreaView, ScrollView, View } from "react-native";
import Sound from "react-native-sound";

const SoundBoard = () => {
  const BUTTONS = [
    {
      icon: "warning",
      sound: new Sound(
        (Platform.OS === "ios" ? "assets/" : "") + "blijven_zitten.mp3",
        Sound.MAIN_BUNDLE
      ),
    },
    {
      icon: "rocket",
      sound: new Sound(
        (Platform.OS === "ios" ? "assets/" : "") + "attention.mp3",
        Sound.MAIN_BUNDLE
      ),
    },
    {
      icon: "rocket",
    },
    {
      icon: "rocket",
    },
    {
      icon: "rocket",
    },
    {
      icon: "rocket",
    },
    {
      icon: "rocket",
    },
    {
      icon: "rocket",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "tomato" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {BUTTONS.map((b) => (
              <SoundButton icon={b.icon} sound={b.sound} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SoundBoard;
