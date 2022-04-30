import style from './folders.module.css'

function Folders(props) {

  return (
    <div
        className={style.wrap}
        onClick={() => {props.setFolder(props.name)}}
    >
        <div className={style.folderLine}>{props.name}</div>
    </div>
  );
}

export default Folders;
