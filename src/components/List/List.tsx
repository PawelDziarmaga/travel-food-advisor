//Import hooks
import { useState } from "react";
//Import components
import Details from "../Details/Details";
//Import types
import { PropsType } from "./TypeList";
//Import style
import styled from "styled-components";
//Define style
const Div = styled.div`
	flex-grow: 1;
	max-width: 30%;
	height: 94vh;
	overflow-y: scroll;
	h2 {
		margin: 10px;
	}
	div.form {
		margin: 10px;
		display: flex;
		justify-content: space-around;
		form {
			label {
				margin: 10px;
			}
		}
	}
	div.list {
		margin: 10px;
	}
`;

const List = (props: PropsType) => {
	//Define State
	const [type, setType] = useState<string>("");
	const [rating, setRating] = useState<string>("");
	//Crete list elements
	const placesElement: JSX.Element[] = props.places?.map((place) => {
		return (
			<div key={place.name}>
				<Details place={place} />
			</div>
		);
	});

	return (
		<Div>
			<h2>Restaurants, Hotels and Attractions around you</h2>
			<div className='form'>
				<form>
					<label>Type</label>
					<select
						value={type}
						onChange={(event) => setType(event.target.value)}>
						<option value='restaurants'>restaurants</option>
						<option value='hotels'>hotels</option>
						<option value='atractions'>atractions</option>
					</select>
				</form>
				<form>
					<label>Rating</label>
					<select
						value={rating}
						onChange={(event) => setRating(event.target.value)}>
						<option value={"0"}>All</option>
						<option value='3'>Above 3</option>
						<option value='4'>Above 4</option>
						<option value='4.5'>Above 4.5</option>
					</select>
				</form>
			</div>
			<div className='list'>{placesElement}</div>
		</Div>
	);
};

export default List;
