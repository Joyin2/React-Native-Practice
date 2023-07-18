import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  return (
    <View>
      <StatusBar style="dark" translucent={false} backgroundColor='white' />
      <Text>
        Open up App.js to start working on your app!
          
      </Text>
      
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
