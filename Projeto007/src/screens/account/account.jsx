import { Image, Text, TextInput, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./account.style.js";
import Button from "../../components/button/button.js";

function Account() {
    return <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>
        <View>
        <View style={styles.containerInput}>
                <TextInput placeholder="Nome" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input} />
            </View>
            <View style={styles.containerInput} secureTextEntry={true}>
                <TextInput placeholder="Senha" style={styles.input} />
            </View>
            <Button text="Criar conta" />
        </View>
        <View styles={styles.footer}>
            <Text>Já tenho conta.</Text>
            <TouchableOpacity>
                <Text style={styles.footerLinks}>Fazer login.</Text>
            </TouchableOpacity>
        </View>


    </View>
}
export default Account;