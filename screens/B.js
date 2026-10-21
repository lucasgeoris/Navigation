import { StyleSheet, Text, View } from 'react-native';

export default function B() {
  return (
    <View style={styles.container}>
      <Text>Page B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});