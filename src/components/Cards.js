import Card from "./Card";

const Cards = ({lists, onDeleteTodos, onDeleteLists}) => {
    const listItems = lists.map((list, index) => <Card key={index.toString()} title={list.title} id={index} todos={list.todos} onDeleteTodos={onDeleteTodos} onDeleteLists={onDeleteLists}/>)
    return(
        <div className="row">
          {listItems}          
        </div>
    );
};

export default Cards;