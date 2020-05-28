import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { systemWeights } from 'react-native-typography';
import { iOSUIKit } from 'react-native-typography';



import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import WashMusicScreen from './screens/WashMusicScreen';
import OptionsScreen from './screens/OptionsScreen';
import CreditsScreen from './screens/CreditsScreen';

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  const bottomNavTheme = {
    dark: true,
    colors: {
      card: '#AFFBD8',border: '#E8EAE9',
    },
  };


  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'monton-reg': require('./assets/fonts/Monoton-Regular.ttf'),
          'Fredoka-one': require('./assets/fonts/FredokaOne-Regular.ttf'),
          'Bangers': require('./assets/fonts/Bangers-Regular.ttf'),
          'Bungee': require('./assets/fonts/BungeeShade-Regular.ttf'),
          'Nosifer': require('./assets/fonts/Nosifer-Regular.ttf'),
          'Anton': require('./assets/fonts/Anton-Regular.ttf'),
          'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
        
          
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' && <StatusBar barStyle="default" hidden={true} />}
        <NavigationContainer  ref={containerRef} initialState={initialNavigationState} theme={bottomNavTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={BottomTabNavigator}  />
            <Stack.Screen name="WashMusic" component={WashMusicScreen} />
            <Stack.Screen name="Options" component={OptionsScreen} />
            <Stack.Screen name= "Credits" component={CreditsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }

  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
