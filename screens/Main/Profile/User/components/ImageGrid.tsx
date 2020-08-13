import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { ListItem } from 'react-native-simple';
import { connect } from 'react-redux';
import { RootState } from '_store';
import { fetchImages } from '_slices/app';
import theme, { metrics } from '_theme';

interface Props {
  userId: string;
  images: { data: any; loading: boolean };
  fetchImages: typeof fetchImages;
  navigate: (route: string) => void;
}

class ImageGird extends React.Component<Props> {
  componentDidMount() {
    const { userId } = this.props;
    this.props.fetchImages(userId);
  }
  render() {
    const { images, navigate } = this.props;
    const { data } = images;

    if (data) {
      return (
        <FlatList
          data={data}
          contentContainerStyle={styles.gridContent}
          numColumns={3}
          renderItem={({ item }) => {
            const { urls } = item;
            const { small, regular } = urls;
            return (
              <ListItem>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigate('Gallery', { uri: regular });
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: small,
                    }}
                  />
                </TouchableWithoutFeedback>
              </ListItem>
            );
          }}
        />
      );
    } else {
      return (
        <ActivityIndicator
          style={styles.loading}
          color={theme.palette.accent}
          size={50}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  loading: { marginTop: metrics.height * 0.25 },
  image: {
    width: metrics.width * 0.31,
    height: metrics.width * 0.31,
    borderRadius: 8,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  gridContent: {
    alignSelf: 'center',
    paddingTop: metrics.padding.normal,
  },
});

const mapStateToProps = (state: RootState) => {
  return {
    images: state.app.currentImages,
  };
};

export default connect(mapStateToProps, { fetchImages })(ImageGird);
