import { StyleSheet } from "react-native";
export default StyleSheet.create({
    //* loading section
    loadingSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    loadingText: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    loadingImg: {
        width: 96,
        height: 96,
    },

    //* weather container
    weatherContainer: {
        flex: 1,
        marginVertical: 25,
        justifyContent: "center",
        alignItems: "center",
    },

    //* header components
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
    },
    location_text: {
        fontSize: 20,
        color: "#2F3543",
        fontWeight: "500",
    },
    country: {
        fontSize: 12,
        marginTop: 4,
        color: "#2F3543",
    },

    //* body component
    bodyContainer: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    },
    temp: {
        color: "#2F3543",
        marginStart: 20,
        fontSize: 100,
        marginTop: 10,
    },
    tempText: {
        fontSize: 48,
        color: "#2F3543",
    },
    weatherImg: {
        height: 50,
        width: 110,
    },
    description: {
        margin: 30,
        fontSize: 15,
        color: "#2F3543",
        fontWeight: "500",
    },
    exData: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    exDataSection: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    exDataText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    exDataLogo: {
        marginEnd: 5,
    },

    //* bottom container
    bottomContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 120,
        marginTop: 25,
    },
    nextweather: {
        flex: 1,
        width: "122%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 100,
    },
    nextweatherImg: {
        width: 50,
        height: 50,
    },
    nextweatherDate: {
        width: 80,
    },
});
