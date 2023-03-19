const Book = ({ img, title, author,number }) => {
  // console.log(props)
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`# ${number+1}`}</span>
    </article>
  );
};
export default Book;