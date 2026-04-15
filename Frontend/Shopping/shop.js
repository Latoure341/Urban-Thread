import { fetchData } from "../../FireBase/database.js";

async function initShop() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Failed to fetch shop data:", error);
  }
}

initShop();