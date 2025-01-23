import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation
import lose from "@/assets/images/lose.jpg"; // Ensure this path is correct

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={lose}
        resizeMode="cover"
        style={styles.image}
      >
        {/* Title positioned at the top center */}
        <Text style={styles.title}>Lose Belly Fat</Text>

        {/* Link to "Let's Do This" positioned at the bottom */}
        <Link href="/NextPage" style={styles.link}>
          <Text style={styles.linkText}>Let's Do This</Text>
        </Link>
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
    justifyContent: 'flex-start', // Align content to the top
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: '10%', // Adjust this value to move the title down if needed
    left: '50%', // Center horizontally
    transform: [{ translateX: -50 }], // Center the title
  },
  link: {
    position: 'absolute',
    bottom: '10%', // Position the link at the bottom
    left: '50%', // Center horizontally
    transform: [{ translateX: -50 }], // Center the link
  },
  linkText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
  },
});

export default WelcomePage;