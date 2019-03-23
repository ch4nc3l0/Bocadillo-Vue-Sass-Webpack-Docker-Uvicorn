from bocadillo import App, Templates, static

app = App(static_dir=None)
templates = Templates(app, directory='../app/static/dist')

@app.route("/")
async def homepage(req, res):
    res.html = await templates.render("index.html", variable="Hello World From Bocadillo!")
    
