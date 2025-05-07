import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import { AppContextProvider } from './context/AppContext';
import HistoryContextProvider from './context/HistoryContext';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <AppContextProvider>
      <HistoryContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="History" component={HistoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </HistoryContextProvider>
    </AppContextProvider>
  );
}

export default App;
