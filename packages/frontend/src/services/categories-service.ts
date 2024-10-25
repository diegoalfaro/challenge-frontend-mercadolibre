class CategoriesService {
  getCategories() {
    return fetch("/api/categories");
  }
}

export default new CategoriesService();
