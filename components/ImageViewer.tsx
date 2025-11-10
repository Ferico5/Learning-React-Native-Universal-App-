import { Image } from 'expo-image';
import { View, StyleSheet } from 'react-native';

type imageSrcProps = {
  imageSrc: string;
};

export default function ImageViewer({ imageSrc }: imageSrcProps) {
  return (
    <View>
      <Image source={imageSrc} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
