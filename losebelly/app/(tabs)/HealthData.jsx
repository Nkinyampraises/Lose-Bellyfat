import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Link } from 'expo-router'; // Import Link for navigation

const HealthData = () => {
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isGenderModalVisible, setGenderModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setGenderModalVisible(false);
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set' && selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      setDateOfBirth(formattedDate);
      setDate(selectedDate); // Update the date state
    }
    setDatePickerVisible(false); // Close the date picker regardless of selection
  };

  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.header}>
        <Link href="/Settings" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.title}>Health Data</Text>
      </View>

      <Text style={styles.subtitle}>Provide your health information:</Text>
      <TouchableOpacity onPress={() => setGenderModalVisible(true)} style={styles.input}>
        <Text style={styles.label}>Gender: {gender || 'Select Gender'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setDatePickerVisible(true)} style={styles.input}>
        <Text style={styles.label}>Date of Birth: {dateOfBirth || 'Select Date of Birth'}</Text>
      </TouchableOpacity>

      {/* Gender Modal */}
      <Modal visible={isGenderModalVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Gender</Text>
            <TouchableOpacity onPress={() => handleGenderSelect('Male')} style={styles.modalButton}>
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelect('Female')} style={styles.modalButton}>
              <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGenderModalVisible(false)} style={styles.modalButton}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Date Picker */}
      {isDatePickerVisible && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start', // Align items to the top
    backgroundColor: '#fff',
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
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default HealthData;