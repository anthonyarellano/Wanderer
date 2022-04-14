from app.models import db, Image

def seed_images():
    one = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/katie-manning-oSIuIEZZ6v0-unsplash.jpg=index?2'
    )
    two = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/marvin-meyer-cjhuXRtRT0Y-unsplash.jpg=index?0'
    )
    three = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/www-florida-guidebook-com-HkAbnEf0Jwc-unsplash.jpg=index?1'
    )
    four = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/joshua-patterson-N6y7e4lTijg-unsplash.jpg=index?3'
    )
    five = Image(
        listing_id=1,
        url='https://tonesbucket.s3.amazonaws.com/allison-huang-_u8KhAZRGHs-unsplash.jpg=index?4'
    )
    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)

    db.session.commit()


def undo_seed_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
