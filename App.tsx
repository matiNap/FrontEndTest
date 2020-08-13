import React from 'react';
import AppContainer from './screens/AppContainer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistedStore } from './store';
import { useFonts } from '@expo-google-fonts/inter';
import { Rubik_500Medium } from '@expo-google-fonts/dev';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'react-native-simple';
import theme from './theme/theme';
import { NavigationContainer } from '@react-navigation/native';

console.disableYellowBox = true;

export default function App() {
  const [fontsLoaded] = useFonts({ Rubik_500Medium });
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={'#313131'} size={50} />
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <NavigationContainer>
            <ThemeProvider darkMode={false} {...{ theme }}>
              <AppContainer />
              <StatusBar style={'dark'} />
            </ThemeProvider>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
