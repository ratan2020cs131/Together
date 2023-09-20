import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './src/navigator/StackRoute';

export default function App() {
  
    return (
      <NavigationContainer>
        <StackRoute />
      </NavigationContainer>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
