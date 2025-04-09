export const getMenus = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/menus");
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error fetching menus:", error);
        return [];
    }
};
export const getCourses = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};

export const getQuizeQuestions = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/quizeQuestions");
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};