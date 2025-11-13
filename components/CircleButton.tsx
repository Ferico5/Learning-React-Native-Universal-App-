import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet, View } from 'react-native';

type CircleButtonProps = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: CircleButtonProps) {
  return (
    <View style={styles.iconContainer}>
      <Pressable style={styles.icon} onPress={onPress}>
        <MaterialIcons name="add" size={38} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
  iconContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
    backgroundColor: '#fff',
  },
});
