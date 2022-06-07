import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import ForgetPassword from '../pages/ForgetPassword';

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/register' element={<Registration />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/forget-password' element={<ForgetPassword />}></Route>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )
}

export default NavigationRoutes;