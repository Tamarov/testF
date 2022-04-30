import './App.css';
import { useEffect, useState } from 'react';

import Folders from './component/folders'
import Files from './component/files'

function App() {
  const [dataFiles, setDataFiles] = useState(null)
  const [folder, setFolder] = useState(null)
  const [sortFile, setSortFile] = useState('')

  useEffect(() => {
    let tmp = document.cookie.split('=')
    setSortFile(String(tmp[1]))

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
        let test = <Folders
          key={key}
          name={key}
          folders={dataFiles[key]}
          count={count}
          folder={folder}
          setFolder={setFolder}
        />
        tmp[count] = (test)
        count++
      }
      return tmp
    }
  }

  function vievDataFiles(){
    if(dataFiles !== null){
      let tmp = []
      let count = 0
      for (let key in dataFiles) {
        if(key === folder){
          let test = <Files
            key={count}
            folders={dataFiles[key]}
            sortFile={sortFile}
          />
          tmp[count] = (test)
        }
      }
      return tmp
    }
  }

  return (
    <div className="app">
      <div className='select'>
        <div className='selectTitle'>Сортировать по:</div>
        <select
          onChange={
            (e) => {
              document.cookie = `sortFile=${e.target.value}`
              setSortFile(e.target.value)
            }
          }
          value={sortFile}
        >
          <option value='0'>Выбрать</option>
          <option value='name'>файлов по имени</option>
          <option value='size'>размеру</option>
          <option value='mtime'>дате создания</option>
        </select>
      </div>
      <div className='appWrap'>
        <div className='foldersBlock'>{vievData()}</div>
        <div className='filesBlock'>{vievDataFiles()}</div>
      </div>
    </div>
  );
}

export default App;
