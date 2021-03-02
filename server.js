const app = require('./src/app');
const sequelize = require('./src/config/db');

sequelize.sync();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
