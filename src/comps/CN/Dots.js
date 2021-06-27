export default function Dots(props) {




    const style=(i)=>{
        return({
          backgroundColor: i== props.index? "black" : "orange"
        })}

    return(
        <div className="index" >
      <div className="indexPoint" style={style(0)} onClick={()=>{props.rotate(0)}}></div>
      <div className="indexPoint" style={style(1)} onClick={()=>{props.rotate(1)}}></div>
      <div className="indexPoint" style={style(2)} onClick={()=>{props.rotate(2)}}></div>
    </div>
    )
}
