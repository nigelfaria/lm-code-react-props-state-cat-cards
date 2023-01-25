interface CatCardProps {
    name: string,
    species: string,
    favFoods: string[],
    birthYear: number,
}

const CatCard: React.FC<CatCardProps> = (props) =>
    <div className="card">
        <h3 className="card__text card__header">{props.name}</h3>
        <p className="card__text">Species: {props.species}</p>
        <p className="card__text">Favourite Food(s): {props.favFoods}</p>
        <p className="card__text">Birth year: {props.birthYear}</p>
    </div>

export default CatCard;