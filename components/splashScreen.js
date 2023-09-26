import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  // Use useEffect to navigate to the login screen after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
    }, 3000); // 3000 milliseconds (3 seconds)
    
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo.png')} // Replace with your splash screen image
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',

  },
});
