import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	background-color: #1572a1;
	h1 {
		margin-left: 10px;
		color: #f3f3ef;
	}
	form {
		color: #f3f3ef;
		label {
			input {
				margin: 0 10px;
				padding-left: 10px;

				height: 30px;
				color: #ffffff;
				background-color: #ffffff55;
				border: 0 solid black;
				border-radius: 3px;
				transition: 0.2s ease-in-out;
				::placeholder {
					color: #f3f3ef;
				}
				:focus {
					border: 0 solid black;
					background-color: #ffffff66;
				}
			}
		}
	}
`;
const Header = () => {
	const [newPlaces, setNewPlaces] = useState<string>("");
	return (
		<Div>
			<h1>Travel Advisor</h1>
			<form>
				<label>
					Explore new places:
					<input
						type='text'
						value={newPlaces}
						placeholder='Search...'
						onChange={(event) => {
							setNewPlaces(event.target.value);
						}}></input>
				</label>
			</form>
		</Div>
	);
};

export default Header;
