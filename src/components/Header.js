import './Header.css'
import { Link } from "react-router-dom";
import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
import { Nav } from 'react-bootstrap';


export default function AccessibleTabs2() {
    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
  
    return (
    <Nav className="justify-content-center" menuVariant="dark" style={{direction: 'rtl', backgroundColor: '#231955'}} activeKey="/">
        <Nav.Item>
            {/* <Nav.Link href="/">الرئيسية</Nav.Link> */}
            <Link to="/"><Tab style={{fontSize: '100%', color: '#ffffff', fontWeight: '700'}} label="الرئيسية" /></Link>
        </Nav.Item>
        <Nav.Item>
            {/* <Nav.Link href="/quran">المصحف</Nav.Link> */}
            <Link to="/quran"><Tab style={{fontSize: '100%', color: '#ffffff', fontWeight: '700'}} label="المصحف" /></Link>
        </Nav.Item>
        <Nav.Item>
            {/* <Nav.Link href="/categories">فئات آخرى</Nav.Link> */}
            <Link to="/categories"><Tab style={{fontSize: '100%', color: '#ffffff', fontWeight: '700'}} label="أقسام آخرى" /></Link>
        </Nav.Item>
    </Nav>

    )
}