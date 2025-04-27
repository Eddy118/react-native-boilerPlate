import {SafeAreaView} from "react-native-safe-area-context";
import {ReactNode} from "react";
import {StyleSheet, ViewStyle} from "react-native";

interface ContainerProps {
    children: ReactNode;
    style?: ViewStyle;
}
const Container = ({children, style= {}} : ContainerProps) => {

    return(
        <SafeAreaView style={[style,styles.container]} >
            {children}
        </SafeAreaView>
        )
}

export default  Container;

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})