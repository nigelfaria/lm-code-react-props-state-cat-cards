import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import {Cat, Dog} from './data/pet';
import Card from './components/card';
import { useState } from 'react';
import { catData, dogData } from './data/pet-data';

import NewCatDogForm from './components/form';

function App(): JSX.Element {
	const [pets, setPets] = useState<Array<Cat | Dog>>([...catData, ...dogData]);

	const dogCount = dogData.length;
	const catCount = catData.length;

	const addPet = (name: string, species: string, favFoods: string[], birthYear: number, animalType: "Cat" | "Dog") => {
		setPets(previousPets => {
			previousPets.push({ name, species, favFoods, birthYear, animalType });
			return previousPets;
		})
	};


	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
				<hr></hr>
				<hr></hr>
				<div className='forms_wrapper'>
					<NewCatDogForm />
				</div>
				<hr></hr>
				<hr></hr>
				<div className='cards__wrapper'>
					{pets.filter(p => p.animalType === "Cat").map((cat, index) => <Card
						key={cat.id}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						catIndex={index}
					/>)}
				</div>
				<hr />
				<hr />
				<div className='cards__wrapper'>
					{pets.filter(p => p.animalType === "Dog").map((dog) => <Card
						key={dog.id}
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
