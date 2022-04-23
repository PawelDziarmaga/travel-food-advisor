//Import hooks
import { useState } from "react";
//Import components
/*import { Autocomplete } from "@react-google-maps/api";*/
//Import style
import { Div, H1, Form, Input } from "./StyleGeader";
const Header = () => {
	const [newPlaces, setNewPlaces] = useState<string>("");
	return (
		<Div>
			<H1>Travel Advisor</H1>
			<Form>
				<label>
					Explore new places:
					<Input
						type='text'
						value={newPlaces}
						placeholder='Search...'
						onChange={(event) => {
							setNewPlaces(event.target.value);
						}}></Input>
				</label>
			</Form>
		</Div>
	);
};

export default Header;
