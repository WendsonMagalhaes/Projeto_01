import './App.css';
import {Routes, Route } from "react-router-dom";

import Inicio from './pages/inicio';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Diet from './pages/diet';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import NutriNavbar from './components/navbar/NutriNavbar';
import NutriHome from './components/nutrihome/NutriHome';
import Store from './components/nutrihome/Store';

import Patients from './components/nutrihome/Patients';
import Patient from './components/nutrihome/Patient';


import RegisterPatient from './components/patientform/RegisterPatient';
import Diets from './components/nutrihome/Diets';



function App() {

  return (  
    <>
    <div>
    <NutriNavbar />
    <Navbar />
    <Routes>
        <Route path = '/' element = {<Inicio/>}/>
        <Route path = '/inicio' element = {<Inicio/>}/>
        <Route path = '/signup' element = {<SignUp/>}/>
        <Route path = '/signin' element = {<SignIn/>}/>
        <Route path = '/nutrihome' element = {<NutriHome/>}/>
        <Route path = '/registerpatient' element = {<RegisterPatient/>}/>
        <Route path = '/patients' element = {<Patients/>}/>
        <Route path = '/patient' element = {<Patient/>}/>
        <Route path = '/diets' element = {<Diets/>}/>
        <Route path = '/diet' element = {<Diet/>}/>
        <Route path = '/store' element = {<Store/>}/>
    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
