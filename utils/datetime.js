const getTimestamp = () => {
  const currentDate = new Date();
  const timestamp = currentDate.toISOString().slice(0, 19).replace('T', ' ');
  return timestamp;
};

const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Tambahkan 1 karena bulan dimulai dari 0
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export { getTimestamp, getCurrentDate };
