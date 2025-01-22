import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import lose from "@/assets/images/lose.jpg"; // Ensure this path is correct

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={lose} // Corrected to 'source'
        resizeMode="cover"
        style={styles.image} // Use the image style for the ImageBackground
      >
        <Text style={styles.title}>Lose Belly Fat</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: '4%',
  },
});

export default WelcomePage;