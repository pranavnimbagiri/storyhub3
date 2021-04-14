import React from 'react';
import { StyleSheet, Text, View ,Image,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { CreateAppContainer} from 'react-navigations';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {WriteStoryScreen} from './screens/WriteStoryScreen'
import {ReadStoryScreen} from './screens/ReadStoryScreen'


const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStoryScreen},
  ReadStory :{screen:ReadStoryScreen}
},
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
