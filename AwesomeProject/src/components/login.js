//Imports
import React, {useState} from 'react';
import {
  Button,
  Icon,
  Input,
  Layout,
  MenuItem,
  OverflowMenu,
  Select,
  SelectItem,
  Tooltip,
} from '@ui-kitten/components';
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
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import App from '../../App'


const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);
//View
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [constrasena, setConstrasena] = useState('');

 const cleanInput = () => {
   setEmail('');
   setConstrasena('');
  }

  return (
    <LinearGradient colors={['black', 'white']} style={styles.container} start={{x: 0 , y: 0}} end={{x:2, y:2}}>
      <Image
        source={{ uri: 'http://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Image
        source={require('../assets/768px-Facebook_f_logo_(2019).svg.png')}
        style={styles.logo}
      />
      {/* <Icon name={"person-add"} size={26} /> */}
      <Input
        style={styles.input}
        placeholder="Email:"
        onChangeText={setEmail}
        value={email}
        accessoryLeft={StarIcon}
      />
      <Input
        style={styles.input}
        placeholder="Password:"
        onChangeText={setConstrasena}
        value={constrasena}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={cleanInput}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        {"\n"}¿No tienes cuenta? {"\n"} ¡Registrate aqui! {"\n"}
      </Text>
      <Text style={styles.text}>
        Email: {email+"\n"}
        Password: {constrasena}
      </Text>
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 210,
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
    top:-40,
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
    width:200,
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
    color: '#fff',
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


export default Login;