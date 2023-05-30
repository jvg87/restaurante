import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#13181D' barStyle='light-content' translucet={false}/>
      <Routes/>
    </NavigationContainer>
  );
}
