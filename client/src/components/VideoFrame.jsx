

function VideoFrame({embedId}) {
    return (
        <div className="responsive">
             <iframe
      width="80%"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      clasName="frame"
    />
        </div>
    )
}

export default VideoFrame
