from app.models import db, RoomType

def seed_room_types():
    one = RoomType(
        type="Entire condo"
    )
    two = RoomType(
        type="Entire vacation home"
    )
    three = RoomType(
        type="Entire home"
    )
    four = RoomType(
        type="Entire apartment"
    )
    five = RoomType(
        type="Entire rental unit"
    )
    six = RoomType(
        type="Private room"
    )
    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)

    db.session.commit()

def undo_seed_room_types():
    db.session.execute('TRUNCATE room_types RESTART IDENTITY CASCADE;')
    db.session.commit()
