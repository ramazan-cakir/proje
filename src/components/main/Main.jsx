import "./Main.css"

const Main = (props) => {
    const {img, title, desc} = props /*data.map ile kopyaladık. Main e gönderdik. maine props verdik. const{img, title, desc} = props yapıp data nın içindeki bilgi başlıklarını eşleştirdik. */
  return (
    <div className="main">
      <div className="card">
      <img src={img}  className="mainİmg"  /> 
        <h4>{title} </h4>
<div className="desc">
<p > {desc} </p>
</div>
        <button className="btn">More Detail</button>
      </div>

    </div>
  )
}

export default Main

/*img deki src nin tırnaklarını sil süslü parantez aç  */