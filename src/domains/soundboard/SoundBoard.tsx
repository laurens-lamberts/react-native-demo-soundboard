import React from 'react';
import SoundButton from '../../app/components/SoundButton';
import {Platform, SafeAreaView, ScrollView, View} from 'react-native';
import Sound from 'react-native-sound';

const SoundBoard = () => {
  var sound1 = new Sound(
    (Platform.OS === 'ios' ? 'assets/' : '') + 'blijven_zitten.mp3',
    Sound.MAIN_BUNDLE,
  );
  var sound2 = new Sound(
    (Platform.OS === 'ios' ? 'assets/' : '') + 'attention.mp3',
    Sound.MAIN_BUNDLE,
  );

  return (
    <View style={{flex: 1, backgroundColor: 'tomato'}}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              padding: 12,
            }}>
            <SoundButton
              icon={'rocket'}
              onPress={() => {
                if (sound1.isPlaying()) {
                  sound1.stop();
                }

                sound1.play(success => {
                  if (success) {
                    console.log('successfully finished playing');
                  } else {
                    console.log('playback failed due to audio decoding errors');
                  }
                });
              }}
            />
            <SoundButton
              icon={'warning'}
              onPress={() => {
                if (sound2.isPlaying()) {
                  sound2.stop();
                }
                sound2.play();
              }}
            />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
            <SoundButton />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SoundBoard;
