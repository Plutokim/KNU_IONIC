const URL = 'https://api.jsonbin.io/v3/b/65ec17421f5677401f3aedee';

export const loadTasks = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    console.error('Failed to load tasks');
    return [];
  }
  const data = await response.json();
  return data.record;
}
