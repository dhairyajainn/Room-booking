export const generateAvailability = () => {
  const availability = [];
  const today = new Date();

  // Get the current year and month
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed (January is 0, December is 11)

  // Calculate the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < daysInMonth; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);

    availability.push({
      date: futureDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
      available: true, // By default, rooms are available
    });
  }

  return availability;
};
