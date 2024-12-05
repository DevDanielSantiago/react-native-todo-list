import { View } from "react-native";

import Logo from "./../../../assets/logo.svg";

import { styles } from "./styles";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Logo style={styles.logo} />
    </View>
  );
}
