import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";



export default function RegisterScreen(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <View>
            <Text>Register</Text>
            <TextInput
                label="Email"
                mode="outlined"
            />
            <TextInput
                label="Senha"
                mode="outlined"
                secureTextEntry
            />  

        </View>        
    )
}