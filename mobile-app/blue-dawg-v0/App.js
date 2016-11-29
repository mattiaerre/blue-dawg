import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import Button from 'react-native-button';

import cameraIcon from './camera-2-xxl.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  main: {
    fontSize: 20,
    fontFamily: 'Courier-Bold',
    textAlign: 'center'
  },
  logo: {
    fontSize: 24,
    fontFamily: 'Courier-Bold',
    textAlign: 'center',
    color: '#33E'
  },
  small: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Courier-Bold'
  }
});

const beginning = 'And the answer is ...';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: beginning,
      cameraIcon,
      photoTaken: false
    };
  }

  onPressLaunchCamera = async () => {
    const data = await Exponent.ImagePicker.launchCameraAsync({});
    if (!data.cancelled) {
      this.setState({ cameraIcon: { uri: data.uri }, photoTaken: true });
    }
  }

  onPressCheck = async () => {
    const data = await fetch('https://wt-mattia-richetto-gmail-com-0.run.webtask.io/image-check');
    this.setState({ answer: `${beginning} **${JSON.parse(data._bodyText).answer}**`, photoTaken: false }); // eslint-disable-line
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20, justifyContent: 'center' }}>
        </View>
        <View style={{ height: 44, backgroundColor: 'powderblue', justifyContent: 'center' }}>
          <Text style={styles.main}>
            blue-dawg
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.logo}>
            ＵＴｪＴＵ
          </Text>
          <Image
            source={this.state.cameraIcon}
            style={{
              width: 250,
              height: 250,
              borderColor: 'white',
              borderWidth: 5,
              marginTop: 25,
              marginBottom: 25
            }} />
          <Button
            onPress={this.onPressLaunchCamera}
            >Launch Camera</Button>
          <Button
            onPress={this.onPressCheck}
            >Check</Button>
          <Text style={{ fontSize: 18 }}>{this.state.answer}</Text>
        </View>
        <View style={{ height: 49, backgroundColor: 'steelblue', justifyContent: 'center' }}>
          <Text style={styles.small}>
            @mattiaerre
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
