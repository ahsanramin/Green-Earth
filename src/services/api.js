export const fetchCategories = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/categories');
    const data = await res.json();
    return data.categories;
};

export const fetchAllPlants = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/plants');
    const data = await res.json();
    return data.plants;
};

export const fetchPlantsByCategory = async(id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
    const data = await res.json();
    return data.plants;
};