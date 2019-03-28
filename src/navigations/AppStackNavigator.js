import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Details from "../screens/Details";

const AppStack= createStackNavigator({
    Home:Home,
    Details: Details
},{
    initialRouteName:'Home'
})

const AppContainer = createAppContainer(AppStack)

export default AppContainer;