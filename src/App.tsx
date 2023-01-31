import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import Card from './components/card';
import { useState } from 'react';
import catData from './data/cat-data';
import Dog from './data/dog';
import dogData from './data/dog-data';
import NewCatDogForm from './components/form';

function App(): JSX.Element {

	const [dogs, setDogs] = useState<Array<Dog>>(dogData);
	const dogCount = dogs.length;

	const [cats, setCats] = useState<Array<Cat>>(catData);
	const catCount = cats.length;

	const addCat = (name:string, species:string, favFoods:string[], birthYear:number ) =>{
		setCats(previousCats => {
			previousCats.push({name, species, favFoods, birthYear });
			return previousCats;
		})
	};

	const addDog = (name:string, species:string, favFoods:string[], birthYear:number ) =>{
		setDogs(previousDogs => {
			previousDogs.push({name, species, favFoods, birthYear });
			return previousDogs;
		})
	};


	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount = {dogCount} />

			<main>
				<hr></hr>
				<hr></hr>
				<div className='forms_wrapper'>
					<NewCatDogForm  />
				</div>
				<hr></hr>
				<hr></hr>
				<div className='cards__wrapper'>
					{cats.map((cat, index) => <Card
						key = {cat.id}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						catIndex={index}
					/>)}
				</div>
				<hr/>
				<hr/>
				<div className='cards__wrapper'>
					{dogs.map((dog, index) => <Card
						key = {dog.id}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
					/>)}
				</div>

			</main>

			<Footer />
		</>
	);
}

export default App;
