import './NameCard.css';

const NameCard = (props) => {
    //console.log(props.nameCard);
    const { name } = props.nameCard;


    return (

        <div class="card">
            <div class="card-body">
                <p>{name} </p>
            </div>
        </div>
    );
};

export default NameCard;
