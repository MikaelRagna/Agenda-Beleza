import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo:{
        marginTop: 20,
        alignItems: 'center'
    },
    imageLogo:{
        width: 300,
        height: 70
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffdb00',
    },
    containerPrimary:{
        flexDirection: 'row',
        marginTop: 40,   
    },
    containerSecondary:{
        flexDirection: 'row',
        padding: 20,
    },
    buttonPrimary:{
        backgroundColor: '#000000',
        width: '70%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSecondary:{
        backgroundColor: '#000000',
        width: '80%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#ffffff'
    }
})

export default styles;