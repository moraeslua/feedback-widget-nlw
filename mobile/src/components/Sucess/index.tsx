import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import sucessImageUrl from "../../assets/sucess.png";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

export function Sucess() {
  return (
    <View style={styles.container}>
      <Image source={sucessImageUrl} style={styles.image} />
      <Text style={styles.title}>Agradecemos o feedback</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  );
}
