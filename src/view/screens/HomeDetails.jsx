import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity } from "../redux/availabilitySlice";
import HotelData from "../data/HotelData";
import "bootstrap-icons/font/bootstrap-icons.css";

const RoomDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const room = HotelData.find((room) => room.id === parseInt(id));
  const dispatch = useDispatch();
  const availability = useSelector((state) => state.availability.availability);

  const today = new Date().toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(today);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [roomQuantity, setRoomQuantity] = useState(room.quantity);
  const [initialQuantity] = useState(room.quantity);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const redirect = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // Check if the email is correct
    if (email === "user@example.com" && password === "12345") {
      setIsAuthenticated(true);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    // Automatically check availability for today's date when the component loads
    handleDateChange({ target: { value: today } });
  }, []);

  if (!room) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center" role="alert">
          Room not found
        </div>
      </div>
    );
  }

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);

    const formattedDate = new Date(date).toISOString().split("T")[0];
    const roomAvailability = availability[room.id]?.[formattedDate];

    setRoomQuantity(initialQuantity);

    if (roomAvailability !== undefined) {
      setAvailabilityMessage(
        roomAvailability ? "Available" : "Room not available"
      );
    } else {
      const initialAvailability = room.availability.find(
        (day) => day.date === formattedDate
      );
      if (initialAvailability) {
        setAvailabilityMessage(
          initialAvailability.available ? "Available" : "Room not available"
        );
      } else {
        setAvailabilityMessage("No data available for this date");
      }
    }
  };

  const handleBooking = () => {
    if (
      selectedDate &&
      availabilityMessage === "Available" &&
      roomQuantity > 0
    ) {
      const formattedDate = new Date(selectedDate).toISOString().split("T")[0];

      setRoomQuantity(roomQuantity - 1);

      dispatch(decrementQuantity({ roomId: room.id, date: formattedDate }));

      if (roomQuantity - 1 <= 0) {
        setAvailabilityMessage("Room not available");
      }

      alert("Room has been booked successfully!");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center display-3 mb-4">{room.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0 shadow-lg rounded">
            <img
              src={room.image}
              alt={room.name}
              className="card-img-top img-fluid rounded-top"
              style={{ objectFit: "cover", maxHeight: "400px" }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm rounded p-4">
            <div className="card-body">
              <h3 className="card-title mb-3">Description</h3>
              <p className="card-text">{room.description}</p>
              <h4 className="mt-3">Price: ${room.pricePerNight} per night</h4>
              <h5 className="mt-3">Amenities:</h5>
              <ul className="list-group mb-4">
                {room.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex align-items-center"
                  >
                    <i className="bi bi-check-circle me-2 text-success"></i>
                    {amenity}
                  </li>
                ))}
              </ul>

              <div className="mb-4">
                <h5>Select a Date:</h5>
                <input
                  type="date"
                  className="form-control"
                  min={today}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                {selectedDate && (
                  <div className="mt-3">
                    <h5>Availability Status:</h5>
                    <p
                      className={`font-weight-bold ${
                        availabilityMessage === "Available"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {availabilityMessage}
                    </p>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h5>Select Number of Guests:</h5>
                <select
                  className="form-select"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                >
                  {[...Array(room.maxOccupancy).keys()].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1} Guest{index + 1 > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <h5>Remaining Quantity: {roomQuantity}</h5>
              </div>
              {isAuthenticated ? (
                <button
                  onClick={handleBooking}
                  className="btn btn-primary btn-lg w-100 mt-3"
                  disabled={availabilityMessage !== "Available"}
                >
                  <i className="bi bi-check2-circle me-2"></i> Proceed to Book
                </button>
              ) : (
                <button
                  onClick={redirect}
                  className="btn btn-primary btn-lg w-100 mt-3"
                >
                  <i className="bi bi-check2-circle me-2"></i> Login to proceed
                  to Book
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
