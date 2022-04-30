//import './App.css';
import { useEffect, useState } from 'react';
import Files from './files'

function Folders(props) {
  //const [dataFiles, setDataFiles] = useState(null)

  useEffect(() => {
  }, [])


  function vievDataFiles(){
    if(props.folders !== null){
      let tmp = []
      let count = 0
      /*for (let key in dataFiles) {
        let test = <Files name={key} files={dataFiles[key]} count={count} />
        tmp[count] = (test)
        count++
      }*/
      console.log(props.folders)
      return props.folders.map(
          (i) => {
              console.log(i)
              return <Files name={i.name}/>
          }
      )
    }
  }

  return (
    <>
        <div>{props.name} {props.count}</div>
        {vievDataFiles()}
        <Files />
    </>
  );
}

export default Folders;
