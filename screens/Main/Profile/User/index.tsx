import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { setDemo } from '_slices/app';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { selectDemo } from '_selectors/app';
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const dispatch = useDispatch();
  const demo = useSelector(selectDemo);
  const { navigate } = useNavigation();
  return (
    <View>
      <Button
        title="User>Gallery"
        containerStyle={{
          width: '70%',
          alignSelf: 'center',
          marginTop: 50,
        }}
        onPress={() => navigate('Gallery')}
      />
    </View>
  );
};

export default User;