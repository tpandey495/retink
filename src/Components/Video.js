const Video=()=>{
return(
    <div className="main">
    <h1>Explainer</h1>
    <div className="video">
    <video width="320" height="240" controls /> 
    <source src="movie.mp4" type="video/mp4" />
    </div>
    </div>
)
}

export default Video;