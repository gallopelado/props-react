import { Comentario } from "./components/Comentario";
import { Saludo } from "./components/Saludo";

function App() {

  const data = {nombres: 'Juan Jose', apellidos:'Gonzalez'}
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Celina' />
      <Saludo persona='Juan José' />
      <Saludo persona='José' coleccion={data}/>
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario
        urlImage='https://icons.iconarchive.com/icons/blackvariant/button-ui-app-pack-one/256/Lite-Icon-icon.png'
        persona='Juan'
        texto='comentario1'
      />
       <Comentario
        urlImage='https://icons.iconarchive.com/icons/blackvariant/button-ui-app-pack-one/256/Lite-Icon-icon.png'
        persona='Rossana'
        texto='comentario2'
      />
       <Comentario
        urlImage='https://icons.iconarchive.com/icons/blackvariant/button-ui-app-pack-one/256/Lite-Icon-icon.png'
        persona='Celina'
        texto='comentario3'
      />
    </div>
  );
}

export default App;
