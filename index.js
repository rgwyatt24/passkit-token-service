
const app = require("./token");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Token service running on port ${PORT}`);
});
