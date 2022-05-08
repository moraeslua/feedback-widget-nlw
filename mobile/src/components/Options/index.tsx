import React from "react";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { View, Text } from "react-native";
import { Copyright } from "../Copyright";
import { styles } from "./styles";
import { Option } from "../Option";
import { FeedbackType } from "../Widget";

const feedbackTypesEntries = Object.entries(feedbackTypes);

interface Props {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>
      <View style={styles.options}>
        {feedbackTypesEntries.map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChange(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
