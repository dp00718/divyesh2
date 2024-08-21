import react, {useState, useEffect} from "react";
import Header1 from './Divyesh2/Common/Header1';
import Header2 from './Divyesh2/Common/Header2';
import Header3 from './Divyesh2/Common/Header3';
import Header4 from './Divyesh2/Common/Header4';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Drawer from "./Divyesh2/Common/Drawer2";
import Drawer2 from "./Divyesh2/Common/Drawer2";
import App1 from "./Divyesh2/Components/Httpcheck/Httpcheckvertsion";


function App() {
  

  return (
    <div>
      <Header1/>
    <Header3/>
    <Header4/>
    <Header2/>
    <Drawer2/>
    <App1/>


    </div>
  );
}
export default App;
