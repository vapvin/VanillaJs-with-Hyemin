const Item = ({text, id}) => {
    return(
        <li id={id}><span>{text}</span></li>
    )
}

export default Item;