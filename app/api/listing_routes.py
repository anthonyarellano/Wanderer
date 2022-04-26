from flask import Blueprint, request, jsonify, abort
from app.models import db, Listing, Image
from .listing_validations import verify_listing_fields, verify_image_fields, verify_listing_values, verify_listing_update
import os

listing_routes = Blueprint('listings', __name__)


@listing_routes.route('/')
def get_all_listings():
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    listings = Listing.query.all()
    listingList = []
    if listings is None:
        abort(404)
    for listing in listings:
        listingList.append(listing.to_dict_images())
    return jsonify(listingList)


@listing_routes.route('/<int:id>')
def get_listing(id):
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    listing = Listing.query.get(id)
    if listing is None:
        abort(404)
    return listing.to_dict()


@listing_routes.route('/images/<int:id>')
def get_listing_images(id):
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    images = Image.query.filter(Image.listing_id == id).all()
    if images is None:
        abort(404)
    imageList = []
    for image in images:
        imageList.append(image.to_dict())
    return jsonify(imageList)


@listing_routes.route('/create', methods=["POST"])
def create_listing():
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")

    listing = dict(request.json)
    print(listing)
    field_error = verify_listing_fields(listing)
    if field_error:
        print(field_error)
        response = jsonify({'message': field_error})
        response.status_code = 400
        return response
    value_error = verify_listing_values(listing)
    if value_error:
        print(value_error)
        response = jsonify({'message': value_error})
        response.status_code = 400
        return response

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
        state=listing['state'],
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
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    images = request.json
    error = verify_image_fields(images)
    if error:
        print(error)
        response = jsonify({'message': error})
        response.status_code = 400
        return response
    if len(images) == 0:
        response = jsonify({'message': "Missing image urls."})
        response.status_code = 400
        return response

    imageList = []
    for image in images:
        newImage = Image(
            listing_id=id,
            url=image
        )
        db.session.add(newImage)
        db.session.commit()
        imageList.append(newImage.to_dict())
    return jsonify(imageList)


@listing_routes.route('/user/<int:id>')
def get_user_listings(id):
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    listings = Listing.query.filter(Listing.owner_id == id).all()
    listingList = []
    for listing in listings:
        listingList.append(listing.to_dict_images())

    return jsonify(listingList)


@listing_routes.route('/update/<int:id>', methods=['PUT'])
def update_listing(id):
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    listing = request.json
    dbListing = Listing.query.get(id)
    if dbListing is None:
        abort(404)

    error = verify_listing_update(listing, dbListing)
    if error:
        print(error)
        response = jsonify({'message': error})
        response.status_code = 400
        return response
    if error is None:
        db.session.commit()
    return dbListing.to_dict()


@listing_routes.route('/images/delete/<int:id>', methods=['DELETE'])
def delete_listing_image(id):
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    image = Image.query.get(id)
    if len(image.listing.images) <= 5:
        response = jsonify({'message': "Listing must have a minimum of 5 images."})
        response.status_code = 400
        return response

    db.session.delete(image)
    db.session.commit()
    return jsonify("Success")


@listing_routes.route('/delete/<int:id>', methods=['DELETE'])
def delete_listing(id):
    # if "Authorization" not in request.headers.keys():
    #     abort(403, description="Missing API Key")
    # if "Authorization" in request.headers.keys():
    #     if request.headers['Authorization'] != os.environ.get('API_KEY'):
    #         abort(403, description="Invalid API Key")
    listing = Listing.query.get(id)
    if listing is None:
        abort(404)
    db.session.delete(listing)
    db.session.commit()
    return jsonify("Success")
