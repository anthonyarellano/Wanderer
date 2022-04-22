from app.models import db, Image

def seed_images():
    one = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach1.jpg=index?0'
    )
    two = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach2.jpg=index?1'
    )
    three = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach3.jpg=index?2'
    )
    four = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach4.jpg=index?3'
    )
    five = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/beach5.jpg=index?4'
    )
    cabin1 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin1.jpg=index?0'
    )
    cabin2 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin2.jpg=index?1'
    )
    cabin3 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin3.jpg=index?2'
    )
    cabin4 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin4.jpg=index?3'
    )
    cabin5 = Image(
        listing_id=2,
        url='https://tonesbucket.s3.amazonaws.com/cabin5.jpg=index?4'
    )
    denver1 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver2.jpg=index?2'
    )
    denver2 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver5.jpg=index?1'
    )
    denver3 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver4.jpg=index?4'
    )
    denver4 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver1.jpg=index?0'
    )
    denver5 = Image(
        listing_id=3,
        url='https://tonesbucket.s3.amazonaws.com/denver3.jpg=index?3'
    )
    nyc1 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc1.jpg=index?0'
    )
    nyc2 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc2.jpg=index?1'
    )
    nyc3 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc3.jpg=index?2'
    )
    nyc4 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc4.jpg=index?3'
    )
    nyc5 = Image(
        listing_id=4,
        url='https://tonesbucket.s3.amazonaws.com/nyc5.jpg=index?4'
    )
    sub1 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs1.jpg=index?0'
    )
    sub2 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs2.jpg=index?1'
    )
    sub3 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs3.jpg=index?2'
    )
    sub4 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs4.jpg=index?3'
    )
    sub5 = Image(
        listing_id=5,
        url='https://tonesbucket.s3.amazonaws.com/suburbs5.jpg=index?4'
    )
    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(cabin1)
    db.session.add(cabin2)
    db.session.add(cabin3)
    db.session.add(cabin4)
    db.session.add(cabin5)
    db.session.add(denver1)
    db.session.add(denver2)
    db.session.add(denver3)
    db.session.add(denver4)
    db.session.add(denver5)
    db.session.add(nyc1)
    db.session.add(nyc2)
    db.session.add(nyc3)
    db.session.add(nyc4)
    db.session.add(nyc5)
    db.session.add(sub1)
    db.session.add(sub2)
    db.session.add(sub3)
    db.session.add(sub4)
    db.session.add(sub5)

    db.session.commit()


def undo_seed_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
