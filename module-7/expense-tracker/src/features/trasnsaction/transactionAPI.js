import axios from "../../utils/axios";

export const getTransactions = async ({ limit, type, searchTerm }) => {
  let queryString = "";
  let response = null;

  if (type !== "all") {
    queryString += `type_like=${type}`;
    response = await axios.get(`/transactions/?${queryString}`);
  }

  if (type === "all") {
    queryString = "";
    response = await axios.get(`/transactions/?${queryString}`);
  }
  if (searchTerm !== "") {
    queryString += `&q=${searchTerm}`;
    response = await axios.get(`/transactions/?${queryString}`);
  }

  if (limit > 0) {
    queryString += `&_limit=${limit}`;
    response = await axios.get(`/transactions/?${queryString}`);
  }

  return response.data;
};

export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);
  return response.data;
};

export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
