import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App2 from './App2';


export default function App() {
  return (
      <App2 />
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
