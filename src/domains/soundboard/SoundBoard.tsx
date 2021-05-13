import React from "react";
import SoundButton from "../../app/components/SoundButton";
import { Platform, SafeAreaView, ScrollView, View } from "react-native";
import Sound from "react-native-sound";

const SoundBoard = () => {
  const BUTTONS = [
    {
      id: 1,
      icon: "warning",
      sound: new Sound(
        (Platform.OS === "ios" ? "assets/" : "") + "blijven_zitten.mp3",
        Sound.MAIN_BUNDLE
      ),
    },
    {
      id: 2,
      icon: "rocket",
      sound: new Sound(
        (Platform.OS === "ios" ? "assets/" : "") + "attention.mp3",
        Sound.MAIN_BUNDLE
      ),
    },
    {
      id: 3,
      icon: "rocket",
    },
    {
      id: 4,
      icon: "rocket",
    },
    {
      id: 5,
      icon: "rocket",
    },
    {
      id: 6,
      icon: "rocket",
    },
    {
      id: 7,
      icon: "rocket",
    },
    {
      id: 8,
      icon: "rocket",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "tomato" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            paddingTop: 12,
          }}
        >
          {BUTTONS.map((b) => (
            <SoundButton key={b.id?.toString()} icon={b.icon} sound={b.sound} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SoundBoard;
