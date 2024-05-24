import {Navigate, Outlet} from 'react-router-dom'; 

type Props ={
    isloggin :  Boolean
}

const AuthRoutes = ({isloggin} : Props) => {
    return isloggin ? <Outlet/> : <Navigate to ="/sign-in" replace />;
}

export default AuthRoutes 