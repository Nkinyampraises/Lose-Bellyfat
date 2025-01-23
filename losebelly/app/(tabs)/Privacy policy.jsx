import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.header}>
        <Link href="/Settings" style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </Link>
        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Interpretation and Definitions</Text>
        <Text style={styles.content}>
          The words in which the initial letter is capitalized have meanings defined under the following conditions.
          {'\n'}The following definitions shall have the same meaning regardless of whether they appear in singular or in plural form.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Definitions</Text>
        <Text style={styles.content}>
          For the purposes of this Privacy Policy:
          {'\n'}• You: means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          {'\n'}• GDPR: (General Data Protection Regulation), you can be referred to as the Data Subject or the User.
          {'\n'}• Company :referred to as either "the Company", "We", "Us" or "Our" in this agreement refers to Leap Fitness Group.
          {'\n'}• Controller: means the person or company that provides the Company down the following conditions:
          {'\n'}  - Application means the software program provided by the Company downloaded by you on any electronic device, named Lose Belly Fat.
          {'\n'}  - Affiliate means an entity that controls, is controlled by or is in common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for the election of directors or other managing authority.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Interpretation</Text>
        <Text style={styles.content}>
          This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Information We Collect</Text>
        <Text style={styles.content}>
          We use Your Personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Types of Data Collected</Text>
        <Text style={styles.content}>
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This includes:
          {'\n'}• Personal Data:
          {'\n'}  - Email address
          {'\n'}  - First and last name
          {'\n'}  - Phone number
          {'\n'}  - Gender
          {'\n'}  - Password or passcode
          {'\n'}  - Usage Data
          {'\n'}• Health Data:
          {'\n'}  - Weight
          {'\n'}  - Height
          {'\n'}  - Body temperature
          {'\n'}  - Menstrual cycle
          {'\n'}  - Symptoms
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Device Information</Text>
        <Text style={styles.content}>
          We may collect device-related information, which includes:
          {'\n'}• Screen Size
          {'\n'}• OS Name
          {'\n'}• OS Build
          {'\n'}• Time Zone
          {'\n'}• System Language
          {'\n'}• Carrier Name
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Location Information</Text>
        <Text style={styles.content}>
          We may collect location information, which includes:
          {'\n'}• Locale
          {'\n'}• Country Area
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Application Information</Text>
        <Text style={styles.content}>
          We may collect application-related information, which includes:
          {'\n'}• App Name
          {'\n'}• App Version
          {'\n'}• SDK Name
          {'\n'}• SDK Version
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Purposes for Data Collection</Text>
        <Text style={styles.content}>
          The Company may use Personal Data for the following purposes:
          {'\n'}• To provide and maintain our Service, including to monitor the usage of our Service.
          {'\n'}• To manage Your Account: To manage your registration as a user of the Service.
          {'\n'}• For the performance of a contract: The development, compliance, and undertaking of the purchase contract for the products, items, or services you have purchased or any other contract with us.
          {'\n'}• To contact You: To contact you by email, phone calls, SMS, or other equivalent forms of electronic communication.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>User Rights</Text>
        <Text style={styles.content}>
          You have the following privacy rights:
          {'\n'}• **CCPA Privacy Rights: If you are a California resident, you have the right to request information about the collection and disclosure of your personal data.
          {'\n'}• **“Do Not Track” Policy: We do not respond to Do Not Track signals.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Third-Party Services</Text>
        <Text style={styles.content}>
          We may share your personal information with third-party service providers to help us provide and improve our Service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Changes to This Privacy Policy</Text>
        <Text style={styles.content}>
          We may update our Privacy Policy from time to time. Any changes will be posted in this section of the app.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.headerText}>Contact Us</Text>
        <Text style={styles.content}>
          If you have any questions about this Privacy Policy, please contact us at: nkinyampraisesncha@gmail.com.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#007BFF',
    paddingRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default PrivacyPolicy;