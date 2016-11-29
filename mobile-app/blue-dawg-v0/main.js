import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert
} from 'react-native';

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

  onPressCheck = () => {
    let answer = 'Maybe';
    const number = Math.round(Math.random() * 3); // 0, 1, 2, 3
    switch (number) {
      case 1:
        answer = 'Yes';
        break;
      case 2:
        answer = 'No';
        break;
      default:
        break;
    }

    this.setState({ answer: `${beginning} **${answer}**`, photoTaken: false });
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
            disabled={this.state.photoTaken}
            onPress={this.onPressLaunchCamera}
            title="Launch Camera"
            color="black"
            accessibilityLabel="Launch Camera"
            />
          <Button
            disabled={!this.state.photoTaken}
            onPress={this.onPressCheck}
            title="Check"
            color="black"
            accessibilityLabel="Check"
            />
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

Exponent.registerRootComponent(App);
