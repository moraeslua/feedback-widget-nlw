import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({ isLoading }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text>Enviar feedback</Text>
      )}
    </TouchableOpacity>
  );
}