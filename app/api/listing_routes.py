from flask import Blueprint, request
from app.models import db, Listing

listing_routes = Blueprint('listings', __name__)

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
