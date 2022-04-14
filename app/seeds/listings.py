from app.models import db, Listing

def seed_listings():
    one = Listing(
        owner_id=2,
        title="Sweet beach house on the beach!",
        bed_number=4,
        bath_number=2,
        bedroom_number=4,
        maximum_guests=8,
        latitude=39.9124281,
        longitude=-74.07781299999999,
        city="Seaside Park",
        price=350,
        address="10-Ocean Avenue-08752",
        description="A nice get away along the New Jersey shoreline. Come spend a weekend away from the kids and learn how to live your life a little hehe xD. Equipped with all the necessities for a getaway that you'll be bragging about until you croak and die LOL. Seriously come by.",
        wifi_avail=True,
        tv_avail=True,
        kitchen_avail=True,
        ac_avail=False,
        washer_avail=False,
        dryer_avail=False,
        hair_dryer_avail=True,
        parking_avail=True,
        fridge_avail=True,
        bbq_avail=True,
        stove_avail=True,
        pool_avail=True,
        check_in="19:32",
        check_out="19:32",
        room_type_id=2,
    )
    db.session.add(one)
    db.session.commit()

def undo_seed_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()
