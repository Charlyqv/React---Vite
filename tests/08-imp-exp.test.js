import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

  test('getHeroeById debe de retornar un héroe por ID', () =>{

    const id = 1;
    const hero = getHeroeById( id );

    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    
  });

  test('getHeroeById debe de retornar undefined si no existe el ID', () =>{

    const id = 100;
    const hero = getHeroeById( id );

    expect( hero ).toBeFalsy();

  });

  test('getHeroeByOwner debe de retornar un arreglo con los héroes de DC', () =>{

    const owner = 'DC';
    const hero1 = getHeroesByOwner( owner );
    
    expect( hero1.length ).toBe( 3 );

    expect( hero1 ).toEqual([ 
    { id: 1, name: 'Batman', owner: 'DC' },
    { id: 3, name: 'Superman', owner: 'DC' },
    { id: 4, name: 'Flash', owner: 'DC' } ]);

    expect( hero1 ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));

  });

  test('getHeroeByOwner debe de retornar un arreglo con los héroes de Marvel', () =>{

    const owner = 'Marvel';
    const hero2 = getHeroesByOwner( owner );
    
    expect( hero2.length ).toBe( 2 );

    expect( hero2 ).toEqual( [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]);

    expect( hero2 ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));

  });

});