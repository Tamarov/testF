import style from './file.module.css'

function File(props) {
  function viewDate(date){
    let tmp = new Date(date).toISOString()
    let tmp1 = tmp.split('T')
    let tmp2 = tmp1[1].split('.')
    return `${tmp1[0]} ${tmp2[0]}`
  }

  function icoFile(){
    if(props.elem.type === "image/png") return <div className={style.icoPng + ' ' +style.ico}></div>

    if(props.elem.type === "image/jpeg") return <div className={style.icoJpg + ' ' +style.ico}></div>
    if(props.elem.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") return <div className={style.icoXls + ' ' +style.ico}></div>
    if(props.elem.type === "application/pdf") return <div className={style.icoPdf + ' ' +style.ico}></div>
    if(props.elem.type === "inode/x-empty") return <div className={style.icoHz + ' ' +style.ico}></div>
    if(props.elem.type === "application/msword") return <div className={style.icoDoc + ' ' +style.ico}></div>
    return null
  }

  return (
    <div className={style.wrap}>
        {icoFile()}
        <div className={style.name}>{props.elem.name}</div>
        <div className={style.size}>{props.elem.size}</div>
        <div className={style.date}>{viewDate(props.elem.mtime)}</div>
        <div className={style.date}>{viewDate(props.elem.atime)}</div>
    </div>
  );
}

export default File;