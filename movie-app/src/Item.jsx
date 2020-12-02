const Item = ({title, path, overview}) => {
    return (
        <>
            <h1>{title}</h1>
            <img src={`//image.tmdb.org/t/p/w220_and_h330_face${path}`} alt="poster"/>
            <p>{overview}</p>
        </>
    )
}

export default Item;