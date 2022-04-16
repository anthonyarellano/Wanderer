from flask import Blueprint, request, jsonify
from app.models import db, Listing, Image

listing_routes = Blueprint('listings', __name__)

@listing_routes.route('/<int:id>')
def get_listing(id):
    listing = Listing.query.get(id)
    return listing.to_dict()


@listing_routes.route('/images/<int:id>')
def get_listing_images(id):
    images = Image.query.filter(Image.listing_id == id).all()
    imageList = []
    for image in images:
        imageList.append(image.to_dict())
    return jsonify(imageList)


@listing_routes.route('/create', methods=["POST"])
def create_listing():
    listing = dict(request.json)
    new_listing = Listing(
        owner_id=listing['owner_id'],
        title=listing['title'],
        bed_number=listing['bed_number'],
        bath_number=listing['bath_number'],
        bedroom_number=listing['bedroom_number'],
        maximum_guests=listing['maximum_guests'],
        latitude=listing['latitude'],
        longitude=listing['longitude'],
        city=listing['city'],
        price=listing['price'],
        address=listing['address'],
        description=listing['description'],
        wifi_avail=listing['wifi_avail'],
        tv_avail=listing['tv_avail'],
        kitchen_avail=listing['kitchen_avail'],
        ac_avail=listing['ac_avail'],
        washer_avail=listing['washer_avail'],
        dryer_avail=listing['dryer_avail'],
        hair_dryer_avail=listing['hair_dryer_avail'],
        parking_avail=listing['parking_avail'],
        fridge_avail=listing['fridge_avail'],
        bbq_avail=listing['bbq_avail'],
        stove_avail=listing['stove_avail'],
        pool_avail=listing['pool_avail'],
        check_in=listing['check_in'],
        check_out=listing['check_out'],
        room_type_id=listing['room_type_id'],
    )
    db.session.add(new_listing)
    db.session.commit()
    return new_listing.to_dict()


@listing_routes.route('/create/images/<int:id>', methods=["POST"])
def create_listing_images(id):
    images = request.json
    newImage = Image(
            listing_id=id,
            url=images['url']
        )
    db.session.add(newImage)
    db.session.commit()
    return newImage.to_dict()


@listing_routes.route('/user/<int:id>')
def get_user_listings(id):
    listings = Listing.query.filter(Listing.owner_id == id).all()
    listingList = []
    for listing in listings:
        listingList.append(listing.to_dict_images())

    return jsonify(listingList)


@listing_routes.route('/update/<int:id>', methods=['PUT'])
def update_listing(id):
    listing = request.json
    dbListing = Listing.query.get(id)
    dbListing.title = listing['title']
    dbListing.bed_number = listing['bed_number']
    dbListing.bath_number = listing['bath_number']
    dbListing.bedroom_number = listing['bedroom_number']
    dbListing.maximum_guests = listing['maximum_guests']
    dbListing.price = listing['price']
    dbListing.description = listing['description']
    dbListing.wifi_avail = listing['wifi_avail']
    dbListing.tv_avail = listing['tv_avail']
    dbListing.kitchen_avail = listing['kitchen_avail']
    dbListing.ac_avail = listing['ac_avail']
    dbListing.washer_avail = listing['washer_avail']
    dbListing.dryer_avail = listing['dryer_avail']
    dbListing.hair_dryer_avail = listing['hair_dryer_avail']
    dbListing.parking_avail = listing['parking_avail']
    dbListing.fridge_avail = listing['fridge_avail']
    dbListing.bbq_avail = listing['bbq_avail']
    dbListing.stove_avail = listing['stove_avail']
    dbListing.pool_avail = listing['pool_avail']
    dbListing.check_in = listing['check_in']
    dbListing.check_out = listing['check_out']
    dbListing.room_type_id = listing['room_type_id']
    db.session.commit()
    return dbListing.to_dict()
