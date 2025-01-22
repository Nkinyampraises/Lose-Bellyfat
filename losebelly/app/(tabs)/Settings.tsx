import React, { useState } from 'react';
import { View, Text, SectionList, StyleSheet, TouchableOpacity, Modal, FlatList, Share, Alert, TextInput, Slider, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Linking from 'expo-linking';
import * as DocumentPicker from 'expo-document-picker';]


const DATA = [
  {
    title: 'General Settings',
    data: [
      { key: 'Language options', icon: 'language' },
      { key: 'Restart progress', icon: 'refresh' },
      { key: 'Delete all data', icon: 'delete' },
      { key: 'Health Data', icon: 'health-and-safety' },


    ],
  },
  {
    title: 'Support Us',
    data: [
      { key: 'Rate us', icon: 'star' },
      { key: 'Share with friends', icon: 'share' },
      { key: 'Privacy policy', icon: 'lock' },
    ],
  },
  {
    title: 'Workout',
    data: [
      { key: 'Sound options', icon: 'volume-up' },
      { key: 'Training rest', icon: 'timer' },
    ],
  },
];

const LANGUAGES = [
  'English', 'Français', 'Italiano', 'Deutsch', 'Español', 'Русский',
  'Português', 'Svenska', 'Polski', '日本語', '한국어', 'Türkçe', 'Dansk', 'العربية',
].sort();

const SettingsScreen = () => {
  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  const [isRateModalVisible, setRateModalVisible] = useState(false);
  const [isReviewModalVisible, setReviewModalVisible] = useState(false);
  const [isSoundOptionsVisible, setSoundOptionsVisible] = useState(false);
  const [isTrainingRestVisible, setTrainingRestVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showConfirm, setShowConfirm] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isMuted, setMuted] = useState(false);
  const [restDuration, setRestDuration] = useState(30); // Default to 30 seconds

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleItemPress(item.key)}
    >
      <Icon name={item.icon} size={24} style={styles.icon} />
      <Text style={styles.title}>
        {item.key === 'Language options' ? Language: ${selectedLanguage} : item.key}
      </Text>
    </TouchableOpacity>
  );

  const handleItemPress = (key) => {
    switch (key) {
      case 'Language options':
        setLanguageModalVisible(true);
        break;
      case 'Restart progress':
      case 'Delete all data':
        setConfirmModalVisible(true);
        setShowConfirm(key === 'Restart progress');
        break;
      case 'Share with friends':
        handleShare();
        break;
      case 'Rate us':
        setRateModalVisible(true);
        break;
      case 'Sound options':
        setSoundOptionsVisible(true);
        break;
      case 'Training rest':
        setTrainingRestVisible(true);
        break;
      default:
        break;
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Check out this amazing app!',
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share the content');
    }
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setLanguageModalVisible(false);
  };

  const handleConfirm = () => {
    if (showConfirm) {
      // Handle restart progress logic
    } else {
      // Handle delete all data logic
    }
    setConfirmModalVisible(false);
  };

  const handleRate = () => {
    setRateModalVisible(false);
    setReviewModalVisible(true);
  };

  const handleSendReview = () => {
    const email = 'your_email@example.com'; // Replace with your email
    const subject = App Review - Rating: ${rating};
    const body = reviewText;

    Linking.openURL(mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)});
    setReviewModalVisible(false);
  };

  const handleUploadSound = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'audio/', // Use 'video/' if you want to allow videos
    });

    if (result.type === 'success') {
      console.log('Uploaded file:', result);
      // Handle the uploaded sound file here
    } else {
      console.log('Canceled');
    }
  };

  const handleSetTrainingRest = () => {
    console.log('Rest duration set to:', restDuration);
    setTrainingRestVisible(false);
  };

  const renderSoundOptionsModal = () => (
    <Modal visible={isSoundOptionsVisible} transparent>
      <View style={styles.modalContainer}>
        <Text>Sound Options</Text>
        <View style={styles.soundOption}>
          <Text>Mute</Text>
          <Switch value={isMuted} onValueChange={setMuted} />
        </View>
        <View style={styles.soundOption}>
          <Text>Voice Guide</Text>
          <Switch value={false} onValueChange={() => {}} /> {/* Placeholder for Voice Guide state */}
        </View>
        <View style={styles.soundOption}>
          <Text>Coach Tips</Text>
          <Switch value={false} onValueChange={() => {}} /> {/* Placeholder for Coach Tips state */}
        </View>
        <TouchableOpacity onPress={handleUploadSound} style={styles.modalButton}>
          <Text style={styles.buttonText}>UPLOAD SOUND</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSoundOptionsVisible(false)} style={styles.modalButton}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const renderTrainingRestModal = () => (
    <Modal visible={isTrainingRestVisible} transparent>
      <View style={styles.modalContainer}>
        <Text style={styles.durationText}>Set duration (5 ~ 180 secs)</Text>
        <Text style={styles.durationValue}>{restDuration} secs</Text>
        <Slider
          minimumValue={5}
          maximumValue={180}
          step={1}
          value={restDuration}
          onValueChange={setRestDuration}
          style={styles.slider}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setTrainingRestVisible(false)} style={styles.modalButton}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSetTrainingRest} style={styles.modalButton}>
            <Text style={styles.buttonText}>SET</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const renderRateModal = () => (
    <Modal visible={isRateModalVisible} transparent>
      <View style={styles.modalContainer}>
        <Text>We are working hard for a better user experience. We'd greatly appreciate if you can rate us.</Text>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Icon name={star <= rating ? 'star' : 'star-border'} size={30} color="#FFD700" />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={handleRate} style={styles.modalButton}>
          <Text style={styles.buttonText}>RATE</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const renderReviewModal = () => (
    <Modal visible={isReviewModalVisible} transparent>
      <View style={styles.modalContainer}>
        <Text style={styles.reviewTitle}>Your suggestions are welcome!</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Write something"
          value={reviewText}
          onChangeText={setReviewText}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSendReview} style={styles.modalButton}>
            <Text style={styles.buttonText}>SEND THE REVIEW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setReviewModalVisible(false)} style={styles.modalButton}>
            <Text style={styles.buttonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const renderLanguageModal = () => (
    <Modal visible={isLanguageModalVisible} transparent>
      <View style={styles.modalContainer}>
        <FlatList
          data={LANGUAGES}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleLanguageSelect(item)} style={styles.languageItem}>
              <View style={styles.radioContainer}>
                <View style={[styles.radio, selectedLanguage === item && styles.selectedRadio]} />
                <Text style={styles.languageText}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
        <TouchableOpacity onPress={() => setLanguageModalVisible(false)} style={styles.modalButton}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const renderConfirmModal = () => (
    <Modal visible={isConfirmModalVisible} transparent>
      <View style={styles.modalContainer}>
        <Text>{showConfirm ? "Are you sure you want to restart progress?" : "Are you sure you want to delete all data?"}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleConfirm} style={styles.modalButton}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setConfirmModalVisible(false)} style={styles.modalButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.key + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
      {renderSoundOptionsModal()}
      {renderTrainingRestModal()}
      {renderRateModal()}
      {renderReviewModal()}
      {renderLanguageModal()}
      {renderConfirmModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(224, 224, 224, 0.8)',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    width: '40%',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  languageItem: {
    padding: 15,
    backgroundColor: '#fff',
    width: '80%',
    marginVertical: 5,
    borderRadius: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
  },
  selectedRadio: {
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
  },
  languageText: {
    fontSize: 16,
  },
  durationText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  durationValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  soundOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
});

export default SettingsScreen;