import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { metrics } from '_theme';
import { useTheme } from 'react-native-simple';

interface Props {
  goBack: () => void;
}

export default ({ goBack }: Props) => {
  const { currentPalette } = useTheme();
  return (
    <TouchableWithoutFeedback onPress={goBack}>
      <Entypo
        name="chevron-left"
        style={[
          styles.icon,
          { color: currentPalette.text.secondary },
        ]}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    marginRight: metrics.margin.medium,
  },
});
