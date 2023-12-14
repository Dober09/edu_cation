export default function Card({url,bgcolor,title,text,btntxt}){
  return (
    <div id="card" style={{backgroundColor:bgcolor}}>
      <div className="image">
        <img src={url} alt={title} />
      </div>
      <div className="text" >
        <p >{title}</p>
      </div>
      <div className="para">
        <p style={{textAlign:"left",color:"snow"}}>{text}</p>
      </div>
      <button>{btntxt}</button>
    </div>
  )
}