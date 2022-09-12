import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Box} from "@mui/material";
import AboutFooter from "./components/AboutFooter";
import Login from "./components/Login";
import WithNavHeader from "./components/WithNavHeader";
import Register from "./components/Register";
import LoginPassword from "./components/LoginPassword";
import StoreDetailsRegistration from "./components/StoreDetailsRegistration";
import StoreBrandRegistration from "./components/StoreBrandRegistration";
import StoreRegistration from "./components/StoreRegistration";
import Home from "./components/Home";
import RegisterPassword from "./components/RegisterPassword";
import {MerchantRegistrationForm} from "./api/AuthenticationApi";

function App() {

    const onStoreRegistrationSuccessfulCallback = () => {
        let page_ = <Home />
        setPage(page_)
    }

    const onLoginSuccessfulCallback = (jwt?: string) => {
        let page_ = <StoreRegistration onStoreRegistrationSuccessfulCallback={onStoreRegistrationSuccessfulCallback} />
        setPage(page_)
    }

    const onLoginButtonClickedCallback = (email: string) => {
        let page_ = <LoginPassword email={email} onLoginSuccessfulCallback={onLoginSuccessfulCallback}  />
        setPage(page_)
    }

    const onMerchantRegisteredCallback = () =>{
        let page_  = <Login onLoginButtonClickedCallback={onLoginButtonClickedCallback} />
        setPage(page_)
    }

    const onCreateAccountButtonClickedCallback = (form: MerchantRegistrationForm) => {
        let page_ = <RegisterPassword form={form} onMerchantRegisteredCallback={onMerchantRegisteredCallback} />
        setPage(page_)
    }


    let register_ = <Register onCreateAccountButtonClickedCallback={onCreateAccountButtonClickedCallback} />

    const [page, setPage] = useState(register_);

  return (
    <div>
        <Box minHeight={'100vh'} display={"flex"} flexDirection={"column"} >
            <WithNavHeader userAuthenticated={false}/>
            {page}
            <AboutFooter/>
        </Box>
    </div>
  );
}

export default App;
