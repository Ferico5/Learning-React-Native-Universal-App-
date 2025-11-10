import { StyleSheet, View } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSrc={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='Choose a photo' theme='primary'></Button>
        <Button label='Use this photo'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
