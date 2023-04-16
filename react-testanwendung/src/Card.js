function Card(props) {
    return(
        <div class="card">
            <p class="card-title">{props.title}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;