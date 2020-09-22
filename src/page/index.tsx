import React from 'react';
import { Text, View, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles';
import Logo from '../assets/image/logo.png';

function LandingPage(){
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.imageLogo} source={Logo}/>
            </View>
            <View>
                <Text>Seja Bem-vindo</Text>
            </View>
        
            <View style={styles.containerPrimary}>
                <RectButton style={styles.buttonPrimary}>
                    <Text style={styles.buttonText}>Logar</Text>
                </RectButton>
            </View>

            <View style={styles.containerSecondary}>
                <RectButton style={styles.buttonSecondary}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton>
            </View>
            <View>
                <a>Esqueceu a senha ?</a>
            </View>
        </View>
    )
}


export default LandingPage;