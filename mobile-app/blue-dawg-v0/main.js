import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

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

class App extends React.Component {
  render() {
    const onPressCheck = () => {
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

      Alert.alert(`And the answer is ...\n**${answer}**`);
    };

    return (
      <View style={styles.container}>
        <View style={{ height: 20, justifyContent: 'center' }}>
        </View>
        <View style={{ height: 44, backgroundColor: 'powderblue', justifyContent: 'center' }}>
          <Text style={styles.main}>
            blue-dawg
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'skyblue', justifyContent: 'center' }}>
          <Text style={styles.logo}>
            ＵＴｪＴＵ
          </Text>
          <Button
            onPress={onPressCheck}
            title="Check"
            color="black"
            accessibilityLabel="Check"
            />
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
