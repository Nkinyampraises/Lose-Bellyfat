import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { RadioButton } from 'react-native-paper'; // Ensure this package is installed
import { Link } from 'expo-router'; // Import Link for navigation

const UnitSelector = () => {
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUnitType, setCurrentUnitType] = useState('');

  const toggleModal = (unitType) => {
    setCurrentUnitType(unitType);
    setModalVisible(true);
  };

  const handleUnitSelect = (unit) => {
    if (currentUnitType === 'weight') {
      setWeightUnit(unit);
    } else if (currentUnitType === 'height') {
      setHeightUnit(unit);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header with title and back button */}
      <View style={styles.header}>
        <Link href="/Settings" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.title}>Unit Selector</Text>
      </View>

      {/* Title at the top of the screen */}
      <Text style={styles.unitsTitle}>Metric & Imperial Units</Text>

      <TouchableOpacity onPress={() => toggleModal('weight')}>
        <Text style={styles.unitText}>Weight Unit: {weightUnit}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleModal('height')}>
        <Text style={styles.unitText}>Height Unit: {heightUnit}</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {currentUnitType === 'weight' && (
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Weight Unit</Text>
              <RadioButton.Group onValueChange={handleUnitSelect} value={weightUnit}>
                <View style={styles.radioContainer}>
                  <RadioButton value="lbs" />
                  <Text>Lbs</Text>
                </View>
                <View style={styles.radioContainer}>
                  <RadioButton value="kg" />
                  <Text>Kg</Text>
                </View>
              </RadioButton.Group>
            </View>
          )}
          {currentUnitType === 'height' && (
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Height Unit</Text>
              <RadioButton.Group onValueChange={handleUnitSelect} value={heightUnit}>
                <View style={styles.radioContainer}>
                  <RadioButton value="cm" />
                  <Text>cm</Text>
                </View>
                <View style={styles.radioContainer}>
                  <RadioButton value="in" />
                  <Text>in</Text>
                </View>
              </RadioButton.Group>
            </View>
          )}
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#007BFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  unitsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  unitText: {
    fontSize: 18,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default UnitSelector;