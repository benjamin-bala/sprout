import React, {useEffect, useState, useMemo} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Navigation from './src/screens/Navigation';
import SplashScreen from 'react-native-splash-screen';
import {Authentication} from './src/UserAuth';

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const value = useMemo(() => ({user, setUser}), [user]);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar />
      <Authentication.Provider value={value}>
        <Navigation />
      </Authentication.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
