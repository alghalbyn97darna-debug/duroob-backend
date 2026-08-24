const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const SHEET_API = 'https://opensheet.elk.sh/17x_nEzcEvn3PoH-O0XP_NuT4JhY-Bbc8zgmlOybKkQw/1';

app.get('/api/trips', async (req, res) => {
  try {
    const response = await fetch(SHEET_API);
    if (!response.ok) throw new Error('فشل الاتصال بالشيت');
    const trips = await response.json();
    res.json(trips);
  } catch (error) {
    console.error('خطأ بجلب الرحلات:', error.message);
    res.status(500).json({ error: 'تعذر تحميل الرحلات حاليًا' });
  }
});

app.get('/', (req, res) => {
  res.send('سيرفر دروب المستقبل شغال ✅');
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log('السيرفر شغال على http://localhost:' + PORT);
});
