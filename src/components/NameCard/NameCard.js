import './NameCard.css';

const NameCard = (props) => {
    //console.log(props.nameCard);
    const { name, img } = props.nameCard;

    return (
        <div class="card mb-3 bg-light bg-gradient">
            <div class="row g-0">
                <div class="col-md-4">
                    <img className="img-fluid p-1" src={img} alt="" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <p class="card-title fw-bold text-primary">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NameCard;
