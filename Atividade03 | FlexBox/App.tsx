import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Teste')}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // circleContainer: {
  //   borderRadius: 10,
  // },
  containerBlue: {
    backgroundColor: 'blue'
  },
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  containerRed: {
    backgroundColor: 'red',
  }
});
