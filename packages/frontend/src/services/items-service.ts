class ItemsService {
  searchItems(query: string) {
    const params = new URLSearchParams();
    params.append("q", query);
    return fetch(`/api/items?${params}`);
  }
  getItemById(id: string) {
    return fetch(`/api/items/${id}`);
  }
}

export default new ItemsService();
