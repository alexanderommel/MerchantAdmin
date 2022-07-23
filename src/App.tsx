import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Box} from "@mui/material";
import AboutFooter from "./components/AboutFooter";
import Login from "./components/Login";
import WithNavHeader from "./components/WithNavHeader";
import Register from "./components/Register";

function App() {
  return (
    <div>
        <Box minHeight={'100vh'} display={"flex"} flexDirection={"column"} >
            <WithNavHeader/>
            <Login/>
            <AboutFooter/>
        </Box>
    </div>
  );
}

export default App;
