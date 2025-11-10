import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type imageSrcProps = {
  imageSrc: ImageSourcePropType;
};

export default function ImageViewer({ imageSrc }: imageSrcProps) {
  return <Image source={imageSrc} style={styles.image}></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
