import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from './store/index.js';
// import App from './App';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/navBar'
import RecipeDetail from './components/RecipeDetail.jsx';

describe('NavBar', () => {
  
  it("Tiene un texto que direcciona a home", () => {
    render(<Provider store={store}> <BrowserRouter> <NavBar/></BrowserRouter></Provider>);
    const home = screen.getByText("Henry - Food app")
    expect(home).toBeInTheDocument();    
  });
  it("Tiene un logo que tambien direcciona a la home", () => {
    render(<Provider store={store}> <BrowserRouter> <NavBar/></BrowserRouter></Provider>);
    const logo = screen.getByAltText('');
    expect(logo).toBeInTheDocument();    
  });  
});


describe('RecipeDetail', () => {
  
  it("Tiene un elemento para cargar la puntuación", () => {
    render(<Provider store={store}> <BrowserRouter> <RecipeDetail/></BrowserRouter></Provider>);
    const home = screen.getByText("Puntuacion:")
    expect(home).toBeInTheDocument();    
  });
  it("Tiene un elemento para cargar el resumen", () => {
    render(<Provider store={store}> <BrowserRouter> <RecipeDetail/></BrowserRouter></Provider>);
    const logo = screen.getByText('Resumen:');
    expect(logo).toBeInTheDocument();    
  }); 
  it("Tiene un elemento para cargar el nivel de salud", () => {
    render(<Provider store={store}> <BrowserRouter> <RecipeDetail/></BrowserRouter></Provider>);
    const home = screen.getByText("Nivel de salud:")
    expect(home).toBeInTheDocument();    
  });
  it("Tiene un elemento para cargar el paso a paso", () => {
    render(<Provider store={store}> <BrowserRouter> <RecipeDetail/></BrowserRouter></Provider>);
    const home = screen.getByText("Paso a paso:")
    expect(home).toBeInTheDocument();    
  });
  it("Tiene un elemento para seleccionar los tipos de dietas", () => {
    render(<Provider store={store}> <BrowserRouter> <RecipeDetail/></BrowserRouter></Provider>);
    const home = screen.getByText("Dietas:")
    expect(home).toBeInTheDocument();      
  });
});
