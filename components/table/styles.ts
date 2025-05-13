import { StyleSheet } from "react-native"
import colors from '@/colors'

export const styles = StyleSheet.create({
    listContainer:{
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200,
    },
    listTitle:{
        fontSize:24,
        fontWeight: "700",
        color: colors.white,
        marginBottom: 18,

    },
    count:{
        fontSize: 48,
        fontWeight:"200",
        color: colors.white,

    },
    subtitle:{
        fontSize: 12,
        fontWeight:"700",
        color: colors.white,
    }

})