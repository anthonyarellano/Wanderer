from app.models import db, Reservation

def seed_reservations():
    one = Reservation(
        user_id=1,
        listing_id=1,
        total_cost=300,
        start_date="2022-05-05",
        end_date="2022-05-10",
        guests=1
    )
    three = Reservation(
        user_id=1,
        listing_id=1,
        total_cost=300,
        start_date="2022-05-14",
        end_date="2022-05-20",
        guests=2,
    )
    two = Reservation(
        user_id=1,
        listing_id=1,
        total_cost=300,
        start_date="2022-06-01",
        end_date="2022-06-10",
        guests=2
    )

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)

    db.session.commit()

def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
