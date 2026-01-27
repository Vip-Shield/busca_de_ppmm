:root {
  --bg: #f2f4f8;
  --card: #ffffff;
  --text: #000000;
}

body.dark {
  --bg: #121212;
  --card: #1e1e1e;
  --text: #ffffff;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--text);
  margin: 0;
  padding: 20px;
  transition: .3s;
}

.search-container input,
select, button {
  background: var(--card);
  color: var(--text);
  border: 1px solid #ccc;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
}

.card {
  background: var(--card);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  gap: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,.15);
  transition: transform .2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
