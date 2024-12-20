import { Image, Text, TextInput, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./login.style.js";
import Button from "../../components/button/button.js";

function Login() {
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>
        <View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput} secureTextEntry={true}>
                <TextInput placeholder="Senha" style={styles.input} />
            </View>
            <Button text="Acessar" />
        </View>
        <View styles={styles.footer}>
            <Text>Não tenho conta.</Text>
            <TouchableOpacity>
                <Text style={styles.footerLinks}>Criar conta agora.</Text>
            </TouchableOpacity>
        </View>


    </View>
}
export default Login;