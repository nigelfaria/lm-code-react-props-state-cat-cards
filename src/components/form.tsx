import { useState } from "react";
import catData from "../data/cat-data";
import dogData from "../data/dog-data";

const NewCatDogForm: React.FC = (addCat, addDog) => {
    const [name, setName] = useState("Enter a Name");
    const [species, setSpecies] = useState("Enter species");
    const [favFoods, setFavFoods] = useState(["List Fav Foods"]);
    const [birthYear, setBirthYear] = useState(2000);
    return (
        <form className="newcatdogform">
            <label className="newcatdogform__text">Select an animal:
                <select className="newcatdogform__text" name="animal">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>
            </label>
            <br />
            <label className="newcatdogform__text">
                <input value={name} className="newcatdogform__text" type="text" name="name" onChange={e => setName(e.target.value)} />
            </label>
            <br />
            <label className="newcatdogform__text">
                <input value={species} className="newcatdogform__text" type="text" name="species" onChange={e => setSpecies(e.target.value)} />
            </label>
            <br />
            <label className="newcatdogform__text">
                <input value={favFoods} className="newcatdogform__text" type="text" name="favFoods" onChange={e => setFavFoods(e.target.value.split(','))} />
            </label>
            <br />
            <label className="newcatdogform__text">Birth Year:
                <input value={birthYear} className="newcatdogform__text" type="number" name="birthyear" min="2000" max="2023" onChange={e => setBirthYear(parseInt(e.target.value))} />
            </label>
            <br />
            <input className="newcatdogform__text" type="submit" value="Submit" />
        </form>
    );
}

export default NewCatDogForm;