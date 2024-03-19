import { Link } from "react-router-dom";

function BookTicket() {
    const [passengers, setPassengers] = useState([{ id: 1, name: '', gender: '', age: '' }]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log({
            passengers
        });
    };

    const handlePassengerChange = (id, key, value) => {
        const updatedPassengers = passengers.map(passenger => {
            if (passenger.id === id) {
                return { ...passenger, [key]: value };
            }
            return passenger;
        });
        setPassengers(updatedPassengers);
    };

    const handleAddPassenger = () => {
        const newPassengerId = passengers.length + 1;
        setPassengers([...passengers, { id: newPassengerId, name: '', gender: '', age: '' }]);
    };

    const handleRemovePassenger = (id) => {
        const updatedPassengers = passengers.filter(passenger => passenger.id !== id);
        setPassengers(updatedPassengers);
    };

    return (
        <div className="container">
            <h1>Book Ticket Here</h1>
            <form onSubmit={handleFormSubmit}>
                {passengers.map(passenger => (
                    <div key={passenger.id} className="passenger-details">
                        <h3>Passenger {passenger.id}</h3>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                value={passenger.name}
                                onChange={(e) => handlePassengerChange(passenger.id, 'name', e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender:</label>
                            <select
                                value={passenger.gender}
                                onChange={(e) => handlePassengerChange(passenger.id, 'gender', e.target.value)}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input
                                type="number"
                                value={passenger.age}
                                onChange={(e) => handlePassengerChange(passenger.id, 'age', parseInt(e.target.value))}
                                required
                            />
                        </div>
                        <button type="button" onClick={() => handleRemovePassenger(passenger.id)}>Remove Passenger</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddPassenger}>Add Passenger</button>
                <button type="submit">Book Tickets</button>
            </form>
        </div>
    );
}

export default BookTicket;
