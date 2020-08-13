import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container } from 'react-native-simple';
import { metrics } from '_theme';
import Header from '_components/Header';
import BackButton from '_components/BackButton';
import { useNavigation } from '@react-navigation/native';

interface Props {
  route: { params: { uri: string } };
}

const Gallery = ({ route: { params } }: Props) => {
  const { uri } = params;
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header>
        <BackButton {...{ goBack }} />
      </Header>
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="contain"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: metrics.width,
    height: metrics.height,
  },
});

export default Gallery;
