import { COLORS, FONTSIZE} from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },
    containerLogo: {
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 23
    },
    input: {
        backgroundColor: COLORS.gray5,
        padding: 12,
        borderRadius: 6, 
    },
    containerInput: {
        marginButton: 15,
    },
    footer:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    footerLinks: {
        color: COLORS.blue
    }
}