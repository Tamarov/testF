import style from './files.module.css'
import File from './file';

function Files(props) {
    function viewData(){
        return sortFiles().map(
            (i, count) => {
                return <File key={count} elem={i} />
            }
        )
    }
    function sortFiles(){
        let tmp = props.folders
        if(props.sortFile !== 'name'){
            tmp.sort((a, b) => a[`${props.sortFile}`] > b[`${props.sortFile}`] ? 1 : -1)
        }else{
            tmp.sort((a, b) => a[`${props.sortFile}`].toLowerCase() > b[`${props.sortFile}`].toLowerCase() ? 1 : -1)
        }
        return tmp
    }
  return (
    <div className={style.wrap}>
        {viewData()}
    </div>
  );
}

export default Files;