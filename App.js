import bg from '../beeweather/assets/images/fondo.png'
import { View, StatusBar,Image } from 'react-native';
import Navegacion from './navigation/AppNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../beeweather/assets/images/fondo.png")}
        className="h-full w-full  absolute"
      />
    <NavigationContainer >
      <Navegacion/>
    </NavigationContainer>
    </View>
    </GestureHandlerRootView>
   
  );
}
