import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Row, Text, Input } from 'react-native-simple';
import { metrics } from '_theme';

import Header from '_components/Header';

const Search = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Header>
        <Row>
          <Text fontSize="big" color="secondary">
            Front-end Test
          </Text>
        </Row>
      </Header>
      <View style={styles.content}>
        <Input
          shadow="default"
          backgroundColor="secondary"
          containerStyle={styles.input}
          placeholder="Search user"
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: metrics.padding.normal,
  },
  input: {
    alignSelf: 'center',
    marginTop: metrics.margin.medium,
  },
});

export default Search;
