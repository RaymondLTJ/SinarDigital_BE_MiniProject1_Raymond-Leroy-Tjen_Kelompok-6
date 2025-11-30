import config from "./src/config/config.js";

const PORT = process.env.PORT || 3000;

config.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
