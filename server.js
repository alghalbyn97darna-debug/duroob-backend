const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const trips = [
  { id: 1, from: "طرابلس", to: "مصراتة", time: "08:00 ص", price: 25, company: "شركة الوحدة" },
  { id: 2, from: "طرابلس", to: "بنغازي", time: "09:30 ص", price: 60, company: "شركة الصداقة" },
  { id: 3, from: "مصراتة", to: "سرت", time: "11:00 ص", price: 20, company: "شركة الوحدة" },
  { id: 4, from: "بنغازي", to: "البيضاء", time: "01:00 م", price: 15, company: "شركة الشرق" }
];

app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.get('/', (req, res) => {
  res.send('سيرفر دروب المستقبل شغال ✅');
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log('السيرفر شغال على http://localhost:' + PORT);
});
