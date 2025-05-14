import {StyleSheet} from "react-native"
import colors from '@/colors'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    section: {
        flex: 1,
        alignSelf:"stretch",
    },
    header:{
        justifyContent:"flex-end",
        marginLeft: 64,
        borderBottomWidth: 3
    },
    title:{
        fontSize: 30,
        fontWeight:"800",
        color: colors.black,
    },
    taskCount:{
        marginTop:4,
        marginBottom: 16,
        color: colors.gray,
        fontWeight: "600"
    },
    footer:{
        paddingHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    input:{
        flex: 1,
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        marginRight: 8,
        paddingHorizontal: 8,
    },
    addTodo:{
        borderRadius: 4,
        padding:  16,
        alignItems: "center",
        justifyContent: "center",

    },
    todoContainer:{
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center"

    },
    todo:{
        color: colors.black,
        fontWeight:"700",
        fontSize: 16
    }





});