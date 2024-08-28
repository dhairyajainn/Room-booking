// src/utils/generateAvailability.js
export const generateAvailability = (daysInAdvance = 30) => {
  // 30 
    const availability = [];
    const today = new Date();
  
    for (let i = 0; i < daysInAdvance; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
  
      availability.push({
        date: futureDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
        available: true, // By default, rooms are available
      });
    }
  
    return availability;
  };
  