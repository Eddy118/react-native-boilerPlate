import {SafeAreaView} from "react-native-safe-area-context";
import {ReactNode} from "react";
import { ViewStyle} from "react-native";
import Styles from './ContainerStyles.tsx'

interface ContainerProps {
    children: ReactNode;
    style?: ViewStyle;
}
const Container = ({children, style= {}} : ContainerProps) => {

    return(
        <SafeAreaView style={[style,Styles.container]} >
            {children}
        </SafeAreaView>
        )
}

export default  Container;

