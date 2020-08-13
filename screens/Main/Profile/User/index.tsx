import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '_selectors/app';
import { useNavigation } from '@react-navigation/native';
import Header from '_components/Header';
import BackButon from '_components/BackButton';
import { Row, useTheme } from 'react-native-simple';
import { Text } from 'react-native';
import { metrics } from '_theme';
import { User as UserType } from '_types';
import ImageGrid from './components/ImageGrid';

const User = () => {
  const { currentPalette } = useTheme();
  const user: UserType = useSelector(selectCurrentUser);
  const {
    username,
    profile_image: { medium: avatarUri },
  } = user;
  const { navigate, goBack } = useNavigation();
  return (
    <View>
      <Header>
        <View>
          <Row align="flex-end" justifyContent="flex-end">
            <BackButon {...{ goBack }} />
            <Avatar
              rounded
              size="medium"
              containerStyle={styles.avatar}
              source={{ uri: avatarUri }}
            />
            <Text
              numberOfLines={1}
              style={[
                styles.name,
                { color: currentPalette.text.secondary },
              ]}
            >
              {username}
            </Text>
          </Row>
        </View>
      </Header>
      <ImageGrid userId={username} {...{ navigate }} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: 'white',
    marginRight: metrics.margin.normal,
  },
  name: {
    fontSize: 25,
    fontFamily: 'Rubik_500Medium',
    width: metrics.width * 0.55,
  },
});
