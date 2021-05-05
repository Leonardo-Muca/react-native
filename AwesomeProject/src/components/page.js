//Imports
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    ScrollView
} from 'react-native'
import {Icon, Input} from '@ui-kitten/components'

const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );
//View
export default function Page (){
    const createTwoButtonAlert = () =>
        Alert.alert(
            "¿Estas seguro de inciar sesión?",
            "Al iniciar sesión el uso de tu informacion",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Aceptar",
                    onPress: () => console.log("OK Pressed")

                }
            ]
        );
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return (
        <ScrollView>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Buscar"
                
            />
            <TextInput
                style={styles.inputContainer}
                onChangeText={onChangeText}
                value={text}
                placeholder="Cuentanos"
                
            />
            <TouchableOpacity
                style={styles.button}
                onPress={createTwoButtonAlert}
            >
            <Text style={styles.buttonText}>Publicar</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                {"\n"}In love{"\n"}
            </Text>
            <Image
                source={{ uri: 'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg' }}
                style={styles.image}
            />

        </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000'
    },
    title: {
        fontFamily: 'SFProDisplay-Regular, Helvetica, Arial, sans-serif',
        fontSize: 30,
        color: '#fff',
        top: -10,
        fontWeight: 'bold'
    },
    image: {
        position: 'relative',
        height: 300,
        width: 300,
        left: -5
    },
    button: {
        top: -100,
        backgroundColor: "#1877f2",
        borderRadius: 6,
        padding: 7,
        marginTop: 10,
        width: 200,
        left: 80
    },
    buttonText: {
        fontFamily: 'inherit',
        color: "#fff",
        fontSize: 20,
        textAlign: 'center',
    },
    inputContainer: {
        top: -100,
        height: 300,
        width: 350,
        margin: 12,
        borderWidth: 1,
        backgroundColor: "#fff"
    },
    input: {
        top: -100,
        height: 40,
        width: 350,
        margin: 12,
        borderWidth: 1,
        backgroundColor: "#fff"
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    logo: {
        width: 70,
        height: 70
    },
})
