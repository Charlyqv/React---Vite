import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe(' Pruebas den <CounterApp/>', () => {

  const counter = 10;

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

  test('debe de incrementar con el botón +1', () => {

    render( <CounterApp value={ counter } /> );
    fireEvent.click( screen.getByText('+1') )
    expect( screen.getByText('11') ).toBeTruthy();

  });

  test('debe de decrementar con el botón -1', () => {

    render( <CounterApp value={ counter } /> );
    fireEvent.click( screen.getByText('-1') )
    expect( screen.getByText('9') ).toBeTruthy();

  });

  test('debe dee funcionar el botón de reset', () => {

    render( <CounterApp value={ 355 } /> );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    // fireEvent.click( screen.getByText('Reset') );
    fireEvent.click(screen.getByTestId('button', { id: 'btn-reset'}));

    expect( screen.getByText( 355 ) ).toBeTruthy();

  });
});