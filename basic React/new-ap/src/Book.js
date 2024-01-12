export const Book = ({ img, title, author, id, findBook }) => {
    // console.log(props);
    // findBook(id);
    const displayTitle = () => {
        console.log(title);
    }
    const WrapperFindBook=()=>{
        findBook(id);
    }
    const inlineHeadingStyles = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
    };

    return (
        <article className='book'>
            <h3 className="bookId">#{id}</h3>
            {/* <Image /> */}
            {/* <Title></Title> */}
            {/* <Author /> */}
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4 style={inlineHeadingStyles}>{author} </h4>
            <button onClick={displayTitle} >Display Title</button> <br />
            <button onClick={WrapperFindBook}>Find Book</button>
        </article>
    )
}