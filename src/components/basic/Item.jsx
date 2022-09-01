import "./css/item.css";

const Item = (props) => {
  return (
    <a className={`${props.color}`} href={props.link}>
      {props.title}
    </a>
  );
};

export default Item;
