import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  ImageBackground,
  Button
} from 'react-native'
import * as eva from '@eva-design/eva';
import {
  Icon,
  Input,
Layout,
  MenuItem,
  OverflowMenu,
  Select,
  SelectItem,
  Tooltip,
} from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Page from './src/components/page'

const StarIcon = (props) => (
  <Icon {...props} name='star' />
);

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        onPress={() => navigation.goBack()}
        title="Log Out"
      />
      <Page />
    </View>
  );
}

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back Login" />
//     </View>
//   );
// }


export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [constrasena, setConstrasena] = useState('');

  const cleanInput = () => {
    setEmail('');
    setConstrasena('');
  }

  const navigateToScreen = () => {
    navigation.navigate('Page')
  }


  function DoubleFunction() {
    cleanInput();
    navigateToScreen();

  }


  return (
    <Layout style={styles.inputContainer} level='1'>
      <View>
      <LinearGradient colors={['#68BEDD', '#D7D8D8']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 2, y: 2 }}>
        <Image
          source={{ uri: 'http://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png' }}
          style={styles.image}
        />
        <Text style={styles.title}>Iniciar Sesión</Text>
        <Image
          source={require('./src/assets/768px-Facebook_f_logo_(2019).svg.png')}
          style={styles.logo}
        />
        <Input
          style={styles.input}
          placeholder="Email:"
          onChangeText={setEmail}
          value={email}
          accessoryRight={StarIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password:"
          onChangeText={setConstrasena}
          value={constrasena}
          secureTextEntry={true}

        />
        <TouchableOpacity
          style={styles.button}
          onPress={DoubleFunction}
          title="Go to Login"
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          {"\n"}¿No tienes cuenta? {"\n"} ¡Registrate aqui! {"\n"}
        </Text>
        <Text style={styles.text}>
          Email: {email + "\n"}
        Password: {constrasena}
        </Text>
      </LinearGradient>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#090979'
  },
  title: {
    fontFamily: 'SFProDisplay-Regular, Helvetica, Arial, sans-serif',
    fontSize: 30,
    color: '#fff',
    top: -40,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    top: -40,
    position: 'relative',
    height: 100,
    width: 300,
    left: -5
  },
  button: {
    backgroundColor: "#1877f2",
    borderRadius: 6,
    padding: 7,
    marginTop: 10,
    width: 200,
  },
  buttonText: {
    fontFamily: 'inherit',
    color: "#fff",
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    color: 'white',
    height: 40,
    width: 350,
    marginBottom: 1,
    fontSize: 17
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  logo: {
    top: -20,
    width: 70,
    height: 70
  },
})

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="LoginScreen">
        <Drawer.Screen name="Page" component={HomeScreen} />
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}