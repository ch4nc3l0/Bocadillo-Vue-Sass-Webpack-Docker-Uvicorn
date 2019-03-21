from bocadillo import App, Templates, static

app = App(static_dir='../app/webpack',
          static_root='webpack')
templates = Templates(app, directory='../app/webpack')

@app.route("/")
async def homepage(req, res):
    res.html = await templates.render("index.html", variable="Hello World From Bocadillo!")
    
