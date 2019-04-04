from bocadillo import App, Templates, static, view
from models import *


# Initialize app
app = App(static_dir=None)
templates = Templates(app, directory='../app/static/dist')
###### Please make sure to use env variables as this information should be private #########
db.bind(provider='postgres', user='yourusername',
        password='change_to_super_secret_password', 
        host='postgres', database='yourdbname')
#^^^^^ Please make sure to use env variables as this information should be private ^^^^^^###
db.generate_mapping(create_tables=True)


# Create index route
@app.route("/")
# Allow post and get methods (only get is allowed by default)
@view(methods=['POST','GET'])
async def homepage(req, res):
    # Check if a post request is inbound
    if 'POST' in req.method:
        # Grab the data from the form of the post request
        data = await req.form()
        # Use function defined in models to add obj to database
        add_animal(name=data['name'],age=data['age'])
        print(data)
    
    with orm.db_session:
        dbquery = orm.select((a.age, a.name) for a in Animal)[:]
        

    res.html = await templates.render("index.html", variable="Hello World From Bocadillo!", dbquery=dbquery)


