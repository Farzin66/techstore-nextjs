

export async function getOrders(){
    try{
        const response = await fetch("http://localhost:3000/api/orders", {
  cache: "no-store",
});
        if (!response.ok){
            throw new Error(
                `Error fetching orders: ${response.status} ${response.statusText}`,
            );
        }
        const data = await response.json();
        return data;
    }catch(error){
        throw error;
    }
}