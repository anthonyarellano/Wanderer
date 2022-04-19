from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Frankie Bean Soupley', email='demo@aa.io', password='password', profile_picture="https://tonesbucket.s3.amazonaws.com/guy1.jpg")
    marnie = User(
        username='Marnie Spagatelli', email='marnie@aa.io', password='password', profile_picture="https://tonesbucket.s3.amazonaws.com/woman1.jpg")
    trevor = User(
        username='Trevor Beverage', email='bobbie@aa.io', password='password', profile_picture="https://tonesbucket.s3.amazonaws.com/guy3.jpg")
    willis = User(
        username='Willis Dilliston', email='willis@aa.io', password='password', profile_picture="https://tonesbucket.s3.amazonaws.com/guy2.jpg")
    jess = User(
         username='Jess Pencil', email='jess@aa.io', password='password', profile_picture="	https://tonesbucket.s3.amazonaws.com/woman2.jpg")
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(trevor)
    db.session.add(willis)
    db.session.add(jess)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
