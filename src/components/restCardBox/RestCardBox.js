import RestCard from "../restCard/RestCard";
function RestCardBox(props) {
    let x = [];
    for(let item of props.item){
        if(props.title === item.label){
            x.push(item);
        }
    }
  return (
    <>
      <div className="restaurantProductItemTitle">
        <p>{props.title}</p>
      </div>
      <div className="restaurantProductItemCards">
        {x.map((i) => (
          <div className="restaurantProductItemCard" key={i.id}>
            <RestCard
              {...i}
              countHand2={props.countHand2}
              countHand={props.countHand}
              add={props.add}
              delete={props.delete}
              remove={props.remove}
              show={props.show}
              hide2={props.hide2}
              hide={props.hide}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default RestCardBox;
