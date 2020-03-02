import React, {useRef} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterFrom from "../../componentes/Account/RegisterForm";
import Toast from 'react-native-easy-toast';

export default function Register (){
    const toastref=useRef();
    return (
        <KeyboardAwareScrollView>
            <Image
                source={require("../../../assets/logo.png")}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={styles.viewForm}>
                <RegisterFrom toastref={toastref} />
            </View>
            <Toast ref={toastref} position="center" opacity={0.5} />
        </KeyboardAwareScrollView>
    );
}







const styles=StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20

    },
    viewForm: {
        marginRight: 40,
        marginLeft: 40
    }
})
