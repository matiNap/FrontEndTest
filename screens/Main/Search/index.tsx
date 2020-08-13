import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Row,
  Text,
  Input,
  ListItem,
  useTheme,
} from 'react-native-simple';
import { searchUser, setCurrentUser } from '_slices/app';
import { selectSearchedUsers } from '_selectors/app';

import Header from '_components/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { metrics } from '_theme';
import { User } from '_types';

const Search = () => {
  const { currentPalette } = useTheme();
  const { navigate } = useNavigation();
  const { data: users, loading } = useSelector(selectSearchedUsers);
  // console.log(searched);
  const dispatch = useDispatch();

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
          onChangeText={(name) => {
            dispatch(searchUser(name));
          }}
          shadow="default"
          backgroundColor="secondary"
          containerStyle={styles.input}
          placeholder="Search user"
        />
        {users && (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={({ id }) => id}
            contentContainerStyle={styles.listContent}
            data={users}
            renderItem={({ item }: { item: User }) => {
              const { username, id } = item;
              const imageUri = item['profile_image'].medium;
              return (
                <ListItem key={id} style={styles.listItem}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      dispatch(setCurrentUser({ ...item }));
                      navigate('Profile');
                    }}
                  >
                    <Row>
                      <Avatar rounded source={{ uri: imageUri }} />
                      <Text fontSize="normal" style={styles.name}>
                        {username}
                      </Text>
                    </Row>
                  </TouchableWithoutFeedback>
                </ListItem>
              );
            }}
          />
        )}
        {!users && !loading && (
          <Text
            fontSize="big"
            style={styles.placeholder}
            color={'rgba(0,0,0,0.3)'}
          >
            Search for user
          </Text>
        )}
        {loading && (
          <ActivityIndicator
            style={styles.loading}
            color={currentPalette.accent}
            size={50}
          />
        )}
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
  listContent: {
    paddingTop: metrics.padding.normal,
  },
  listItem: {
    marginVertical: metrics.margin.small,
  },
  name: {
    marginLeft: 5,
  },
  placeholder: {
    alignSelf: 'center',
    marginTop: metrics.height * 0.25,
  },
  loading: {
    marginTop: metrics.height * 0.25,
  },
});

export default Search;
