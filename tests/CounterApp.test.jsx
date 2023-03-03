import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe(' Pruebas den <CounterApp/>', () => {

  const counter = 1001;

  test(' debe de hacer match con el snapshot', () => {
    const { container } = render( <CounterApp counter = { counter } /> );
    expect( container ).toMatchSnapshot();

  });

  test('debe de mostrar el valor inicial de 100', () => {
    
    const counter = 100;
    const { getByText } = render(
      <CounterApp
        value = { counter }
      />
    );

    expect( getByText(counter) ).toBeTruthy();

  });

  test('debe de mostrar el valor inicial de 100 2', () => {
    
    render( <CounterApp value={ 100 } /> );
    expect( screen.getByText(100)).toBeTruthy();

  });
});