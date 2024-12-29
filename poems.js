app.get("/api/poems", (req, res) => {
    res.json(poems);
});

app.get("/api/poems/:id", (req, res) => {
    res.json(poems[req.params.id]);
});

