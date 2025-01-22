import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Switch,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Modal from 'react-native-modal';
import { Link } from 'expo-router'; // Use Link for navigation

const ReminderPage = () => {
  const [reminders, setReminders] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [days, setDays] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = (index) => {
    setReminders(prevReminders => {
      const newReminders = [...prevReminders];
      newReminders[index].isEnabled = !newReminders[index].isEnabled;
      return newReminders;
    });
  };

  const addReminder = () => {
    const newReminder = {
      time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
      days: days.join(', '),
      isEnabled,
    };

    setReminders([...reminders, newReminder]);
    resetModal();
  };

  const resetModal = () => {
    setModalVisible(false);
    setSelectedTime(new Date());
    setDays([]);
    setIsEnabled(true);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimeConfirm = (date) => {
    setSelectedTime(date);
    hideTimePicker();
  };

  const toggleDay = (day) => {
    setDays(prevDays =>
      prevDays.includes(day)
        ? prevDays.filter(d => d !== day)
        : [...prevDays, day]
    );
  };

  const deleteReminder = (index) => {
    Alert.alert(
      "Delete Reminder",
      "Are you sure you want to delete this reminder?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK", onPress: () => {
            setReminders(prevReminders => {
              const newReminders = prevReminders.filter((_, i) => i !== index);
              return newReminders;
            });
          }
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.header}>
        <Link href="/Settings" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.title}>Reminder</Text>
      </View>

      <FlatList
        data={reminders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.reminderCard}>
            <View style={styles.reminderInfo}>
              <Text style={styles.reminderTime}>{item.time}</Text>
              <Text style={styles.reminderDays}>Repeat: {item.days}</Text>
            </View>
            <View style={styles.reminderActions}>
              <Switch
                value={item.isEnabled}
                onValueChange={() => toggleSwitch(index)}
                style={styles.switch}
              />
              <TouchableOpacity onPress={() => deleteReminder(index)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={openModal}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Select Time</Text>
          <TouchableOpacity onPress={showTimePicker}>
            <Text style={styles.selectedTimeText}>
              {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
            </Text>
          </TouchableOpacity>
          <Text style={styles.modalText}>Repeat:</Text>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <TouchableOpacity key={day} onPress={() => toggleDay(day)} style={styles.dayButton}>
              <Text style={[styles.dayText, days.includes(day) ? styles.selectedDay : null]}>
                {day}
              </Text>
              {days.includes(day) && <View style={styles.checkbox} />}
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.okButton} onPress={addReminder}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={resetModal}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        date={selectedTime}
        display="spinner"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  reminderCard: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reminderInfo: {
    flex: 1,
  },
  reminderTime: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reminderDays: {
    fontSize: 14,
    color: '#666',
  },
  reminderActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    marginRight: 10,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginVertical: 10,
  },
  dayButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  dayText: {
    fontSize: 16,
    marginRight: 10,
  },
  selectedDay: {
    fontWeight: 'bold',
    color: 'blue',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  selectedTimeText: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 5,
    textAlign: 'center',
    color: '#007BFF',
  },
  okButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  okButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});

// Export the component
export default ReminderPage;