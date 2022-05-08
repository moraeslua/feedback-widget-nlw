import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import sucessImageUrl from "../../assets/sucess.png";
import { Copyright } from "../Copyright";
import { styles } from "./styles";

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Sucess({ onSendAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image source={sucessImageUrl} style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback</Text>
      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
