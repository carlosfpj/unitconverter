import MainContent from './MainContent.js';
import MainToolbar from './MainToolbar.js';

function Main(props) {
  return (
    <div className="col-span-10">
      <MainToolbar titulo={props.opcion}>
      </MainToolbar>
      <MainContent titulo={props.opcion}>
      </MainContent>
    </div>
  )
}

export default Main;