import React from "react";
import { feedbackTypes } from "../../utils/feedbackTypes";

import { View, Text } from "react-native";
import { Copyright } from "../Copyright";

import { styles } from "./styles";
import { Option } from "../Option";

const feedbackTypesEntries = Object.entries(feedbackTypes);

export function Options() {
  return (
    <View style={styles.container}>
      <Text>Deixe seu feedback</Text>
      <View style={styles.options}>
        {feedbackTypesEntries.map(([key, value]) => (
          <Option key={key} title={value.title} image={value.image} />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
