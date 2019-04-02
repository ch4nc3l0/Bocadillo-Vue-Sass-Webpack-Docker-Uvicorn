from pony import orm

db = orm.Database()

# Define animals table
class Animal(db.Entity):
    id = orm.PrimaryKey(int, auto=True)
    name = orm.Required(str)
    age = orm.Required(int)

# Create add animal function
@orm.db_session
def add_animal(name:str,age:str):
    Animal(name=name,age=age)
