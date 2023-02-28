
// const newMessage = [1,2,3,4,5];

// const newMessage = {
//   message: 'Hola Mundo',
//   title: 'Carlos'
// };

// function getSaludo (){
//   const saludo = "Hola crayola!!! ";
//   return saludo;
// }

// const getResult = () => {
//   return '28/08/1998';
// }

import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name } ) => {
  
  // console.log(props);
  
  return (
    <>
      {/* <h1>{ subTitle +1 }</h1> */}
      {/* <h1>Carlos</h1> */}
      {/* <h1> { getResult() } </h1> */}
      {/* <h1> { getSaludo() } </h1> */}
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      {/* <p>Holi</p> */}
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  // title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Carlos Villaseñor Quintero'
}