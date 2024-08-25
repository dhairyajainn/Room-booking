import { useState } from "react";
import HotelData from "../data/HotelData";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(HotelData);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 display-4" style={{ fontWeight: '300', letterSpacing: '1px' }}>Hotel Room Booking</h1>
      <div className="row">
        {data.map((e) => (
          <div className="col-md-4 mb-4" key={e.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img 
                src={e.image} 
                className="card-img-top" 
                alt={e.name} 
                style={{ objectFit: 'cover', height: '200px', borderRadius: '8px 8px 0 0' }} 
              />
              <div className="card-body d-flex flex-column p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 8px 8px' }}>
                <h5 className="card-title mb-2" style={{ fontWeight: '500', fontSize: '1.25rem' }}>{e.name}</h5>
                <p className="card-text mb-3" style={{ fontSize: '0.95rem', color: '#6c757d' }}>{e.description}</p>
                <Link to={`/room/${e.id}`} className="btn btn-block mt-auto" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', padding: '10px 15px', fontWeight: '500' }}>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
