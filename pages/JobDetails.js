// JobDetails.js

import React from 'react';
import { View, Text } from 'react-native';

const JobDetails = ({ route }) => {
  const { id } = route.params;

  // Use the 'id' parameter to fetch and display job details

  return (
    <View>
      <Text>Job Details Screen for ID: {id}</Text>
    </View>
  );
};

export default JobDetails;
