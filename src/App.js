import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Folders from './component/folders'

function App() {
  const [dataFiles, setDataFiles] = useState(null)

  useEffect(() => {
    //document.cookie = "user=John"
    getFiles()
  }, [])

  async function getFiles(){
    const url = `https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8`
    await fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      setDataFiles(data.data.files)
    })
    .catch(function (error) {
      console.log('error', error)
    })
  }
  
  function vievData(){
    if(dataFiles !== null){
      let tmp = []
      let count = 0
      for (let key in dataFiles) {
        let test = <Folders name={key} folders={dataFiles[key]} count={count} />
        tmp[count] = (test)
        count++
      }
      return tmp
    }
  }

  return (
    <div className="App">
      {vievData()}
    </div>
  );
}

export default App;
