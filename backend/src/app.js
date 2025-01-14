import express from "express";
const app = express();
const PORT = parseInt(process.env.PORT || "3000");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(PORT, "0.0.0.0", () => {
    console.log(`App is live at port ${PORT}`);
});
//# sourceMappingURL=app.js.map