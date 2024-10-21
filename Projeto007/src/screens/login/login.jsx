import { Image, Text, TextInput, View } from "react-native";
import logo from "../../assets/logo4 1.png";
import {styles} from "./login.style.js";
import Button  from "../../components/button/button.js";

function Login(){
    return <View style={styles.container}>

        <View style={styles.containerLogo}> 
            <Image source={logo} style={styles.logo}/>
        </View>
        <View>
            <TextInput placeholder="E-mail" style={styles.input}/>
            <TextInput placeholder="Senha" style={styles.input}/>
            <Button text="Acessar" />
        </View>
        <View styles={styles.footer}>
            <Text>Não tenho conta.Criar conta agora.</Text>
        </View>
       

    </View>
}
export default Login;