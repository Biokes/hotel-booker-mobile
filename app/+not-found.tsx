import { Link, Stack } from 'expo-router';
import {StyleSheet, Text, View} from 'react-native';


export default function NotFoundScreen() {
  return (
      <View style={styles.container}>
         <Text type="title">This screen doesn't exist.</Text>
         <Link href="/(tabs)/index">Go to home screen!</Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    cursor:"pointer",
    textDecorationLine:"underline"
  },
});
