import time
from app.models import db, Listing, Image

def verify_image_fields(images):
    error = None
    if type(images) is not list:
        error = "Urls must be in a list."
        return error
    for image in images:
        if type(image) is not str:
            error = "Url must be a string"
            return error
        in_aws = image.startswith('https://tonesbucket.s3.amazonaws.com/')
        if in_aws is False:
            error = "Url(s) must be uploaded via authorized S3 bucket."
            return error


def verify_listing_fields(listing):
    missing_fields = []
    if 'owner_id' not in listing.keys():
        missing_fields.append('owner_id')
    if 'title' not in listing.keys():
        missing_fields.append('title')
    if 'bed_number' not in listing.keys():
        missing_fields.append('bed_number')
    if 'bath_number' not in listing.keys():
        missing_fields.append('bath_number')
    if 'bedroom_number' not in listing.keys():
        missing_fields.append('bedroom_number')
    if 'maximum_guests' not in listing.keys():
        missing_fields.append('maximum_guests')
    if 'latitude' not in listing.keys():
        missing_fields.append('latitude')
    if 'longitude' not in listing.keys():
        missing_fields.append('longitude')
    if 'city' not in listing.keys():
        missing_fields.append('city')
    if 'state' not in listing.keys():
        missing_fields.append('state')
    if 'price' not in listing.keys():
        missing_fields.append('price')
    if 'address' not in listing.keys():
        missing_fields.append('address')
    if 'description' not in listing.keys():
        missing_fields.append('description')
    if 'wifi_avail' not in listing.keys():
        missing_fields.append('wifi_avail')
    if 'tv_avail' not in listing.keys():
        missing_fields.append('tv_avail')
    if 'kitchen_avail' not in listing.keys():
        missing_fields.append('kitchen_avail')
    if 'ac_avail' not in listing.keys():
        missing_fields.append('ac_avail')
    if 'washer_avail' not in listing.keys():
        missing_fields.append('washer_avail')
    if 'dryer_avail' not in listing.keys():
        missing_fields.append('dryer_avail')
    if 'hair_dryer_avail' not in listing.keys():
        missing_fields.append('hair_dryer_avail')
    if 'parking_avail' not in listing.keys():
        missing_fields.append('parking_avail')
    if 'fridge_avail' not in listing.keys():
        missing_fields.append('fridge_avail')
    if 'bbq_avail' not in listing.keys():
        missing_fields.append('bbq_avail')
    if 'stove_avail' not in listing.keys():
        missing_fields.append('stove_avail')
    if 'pool_avail' not in listing.keys():
        missing_fields.append('pool_avail')
    if 'check_in' not in listing.keys():
        missing_fields.append('check_in')
    if 'check_out' not in listing.keys():
        missing_fields.append('check_out')
    if 'room_type_id' not in listing.keys():
        missing_fields.append('room_type_id')
    if len(missing_fields):
        return f"Error in fields: {', '.join(missing_fields)}"
    else:
         return None

def verify_listing_values(listing):
    errors = []
    if listing['owner_id'] <= 0:
        errors.append('Invalid owner_id')

    if type(listing['title']) is not str:
        errors.append('title must be a string.')
    if type(listing['title']) is str:
        if len(listing['title']) <= 0 or len(listing['title']) > 255:
            errors.append('title must be between 1 and 255 characters.')

    if type(listing['bed_number']) is not int:
        try:
            val = int(listing['bed_number'])
            if val <= 0 or val > 2147483647:
                errors.append('bed_number must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('bed_number must be an integer.')
    if type(listing['bed_number']) is int:
        if listing['bed_number'] <= 0 or listing['bed_number'] > 2147483647:
            errors.append('bed_number must be greater than 0 and within postgreSQL integer range.')

    if type(listing['bath_number']) is not int:
        try:
            val = int(listing['bath_number'])
            if val <= 0 or val > 2147483647:
                errors.append('bath_number must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('bath_number must be an integer.')
    if type(listing['bath_number']) is int:
        if listing['bath_number'] <= 0 or listing['bath_number'] > 2147483647:
            errors.append('bath_number must be greater than 0 and within postgreSQL integer range.')

    if type(listing['bedroom_number']) is not int:
        try:
            val = int(listing['bedroom_number'])
            if val <= 0 or val > 2147483647:
                errors.append('bedroom_number must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('bedroom_number must be an integer.')
    if type(listing['bedroom_number']) is int:
        if listing['bedroom_number'] <= 0 or listing['bedroom_number'] > 2147483647:
            errors.append('bedroom_number must be greater than 0 and within postgreSQL integer range.')

    if type(listing['maximum_guests']) is not int:
        try:
            val = int(listing['maximum_guests'])
            if val <= 0 or val > 2147483647:
                errors.append('maximum_guests must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('maximum_guests must be an integer.')
    if type(listing['maximum_guests']) is int:
        if listing['maximum_guests'] <= 0 or listing['maximum_guests'] > 2147483647:
            errors.append('maximum_guests must be greater than 0 and within postgreSQL integer range.')

    if type(listing['price']) is not int:
        try:
            val = int(listing['price'])
            if val <= 0 or val > 2147483647:
                errors.append('price must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('price must be an integer.')
    if type(listing['price']) is int:
        if listing['price'] <= 0 or listing['price'] > 2147483647:
            errors.append('price must be greater than 0 and within postgreSQL integer range.')

    if type(listing['latitude']) is not float:
        errors.append('latitude must be a floating point integer.')
    if type(listing['latitude']) is float:
        if listing['latitude'] > 90 or listing['latitude'] < -90:
            errors.append('Invalid latitude.')

    if type(listing['longitude']) is not float:
        errors.append('longitude must be a floating point integer.')
    if type(listing['longitude']) is float:
        if listing['longitude'] > 180 or listing['longitude'] < -180:
            errors.append('Invalid longitude.')

    if type(listing['city']) is not str:
        errors.append('city must be an string.')
    if type(listing['city']) is str:
        if len(listing['city']) <= 0 or len(listing['city']) > 255:
            errors.append('city must be greater than 0 and less than 255 characters.')

    if type(listing['address']) is not str:
        errors.append('address must be an string.')
    if type(listing['address']) is str:
        if len(listing['address']) <= 0 or len(listing['address']) > 255:
            errors.append('address must be greater than 0 and less than 255 characters.')

    if type(listing['state']) is not str:
        errors.append('state must be an string.')
    if type(listing['state']) is str:
        if len(listing['state']) <= 0 or len(listing['state']) > 255:
            errors.append('state must be greater than 0 and less than 255 characters.')

    if type(listing['description']) is not str:
        errors.append('description must be an string.')
    if type(listing['description']) is str:
        if len(listing['description']) <= 0 or len(listing['description']) > 2000:
            errors.append('description must be greater than 0 and less than 2000 characters.')


    if type(listing['wifi_avail']) is not bool:
        errors.append('wifi_avail must be a boolean value.')
    if type(listing['tv_avail']) is not bool:
        errors.append('tv_avail must be a boolean value.')
    if type(listing['kitchen_avail']) is not bool:
        errors.append('kitchen_avail must be a boolean value.')
    if type(listing['ac_avail']) is not bool:
        errors.append('ac_avail must be a boolean value.')
    if type(listing['washer_avail']) is not bool:
        errors.append('washer_avail must be a boolean value.')
    if type(listing['dryer_avail']) is not bool:
        errors.append('dryer_avail must be a boolean value.')
    if type(listing['hair_dryer_avail']) is not bool:
        errors.append('hair_dryer_avail must be a boolean value.')
    if type(listing['parking_avail']) is not bool:
        errors.append('parking_avail must be a boolean value.')
    if type(listing['fridge_avail']) is not bool:
        errors.append('fridge_avail must be a boolean value.')
    if type(listing['bbq_avail']) is not bool:
        errors.append('bbq_avail must be a boolean value.')
    if type(listing['stove_avail']) is not bool:
        errors.append('stove_avail must be a boolean value.')
    if type(listing['pool_avail']) is not bool:
        errors.append('pool_avail must be a boolean value.')

    if type(listing['check_in']) is not str:
        errors.append('check_in must be a string formatted H:M')
    if type(listing['check_in']) is str:
        try:
            time.strptime(listing['check_in'], '%H:%M')
        except ValueError:
            errors.append("Incorrect check_in format, should be H:M")
    if type(listing['check_out']) is not str:
        errors.append('check_out must be a string formatted H:M')
    if type(listing['check_out']) is str:
        try:
             time.strptime(listing['check_out'], '%H:%M')
        except ValueError:
            errors.append("Incorrect check_out format, should be H:M")

    if type(listing['room_type_id']) is not int:
        try:
            val = int(listing['room_type_id'])
            if val <= 0 or val > 2147483647:
                errors.append('room_type_id must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('room_type_id must be an integer.')
    if type(listing['room_type_id']) is int:
        if listing['room_type_id'] <= 0 or listing['room_type_id'] > 6:
            errors.append('room_type_id must be an integer between 1 and 6.')
    if errors:
        return f"Error in fields: {', '.join(errors)}"
    else:
        return None


def verify_listing_update(listing, dbListing):
    errors = []

    if "title" in listing.keys():
        error = False
        if type(listing['title']) is not str:
            errors.append('title must be a string.')
            error = True
        if type(listing['title']) is str:
            if len(listing['title']) <= 0 or len(listing['title']) > 255:
                errors.append('title must be between 1 and 255 characters.')
                error = True
        if error == False:
            dbListing.title = listing['title']

    if "bed_number" in listing.keys():
        error = False
        try:
            val = int(listing['bed_number'])
            if val <= 0 or val > 2147483647:
                errors.append('bed_number must be greater than 0 and within postgreSQL integer range.')
                error = True
        except ValueError:
            errors.append('bed_number must be an integer.')
            error = True
        if error == False:
            dbListing.bed_number = listing['bed_number']

    if "bath_number" in listing.keys():
        error = False
        try:
            val = int(listing['bath_number'])
            if val <= 0 or val > 2147483647:
                errors.append('bath_number must be greater than 0 and within postgreSQL integer range.')
                error = True
        except ValueError:
            errors.append('bath_number must be an integer.')
            error = True
        if error == False:
            dbListing.bath_number = listing['bath_number']

    if "bedroom_number" in listing.keys():
        error = False
        try:
            val = int(listing['bedroom_number'])
            if val <= 0 or val > 2147483647:
                errors.append('bedroom_number must be greater than 0 and within postgreSQL integer range.')
                error = True
        except ValueError:
            errors.append('bedroom_number must be an integer.')
            error = True
        if error == False:
            dbListing.bedroom_number = listing['bedroom_number']

    if "maximum_guests" in listing.keys():
        error = False
        try:
            val = int(listing['maximum_guests'])
            if val <= 0 or val > 2147483647:
                errors.append('maximum_guests must be greater than 0 and within postgreSQL integer range.')
                error = True
        except ValueError:
            errors.append('maximum_guests must be an integer.')
            error = True
        if error == False:
            dbListing.maximum_guests = listing['maximum_guests']

    if "price" in listing.keys():
        error = False
        try:
            val = int(listing['price'])
            if val <= 0 or val > 2147483647:
                errors.append('price must be greater than 0 and within postgreSQL integer range.')
                error = True
        except ValueError:
            errors.append('price must be an integer.')
            error = True
        if error == False:
            dbListing.price = listing['price']

    if "description" in listing.keys():
        error = False
        if type(listing['description']) is not str:
            errors.append('description must be a string.')
            error = True
        if type(listing['description']) is str:
            if len(listing['description']) <= 0:
                errors.append('description must be greater than 0 characters long.')
                error = True
        if error == False:
            dbListing.description = listing['description']

    if "wifi_avail" in listing.keys():
        error = False
        if type(listing["wifi_avail"]) is not bool:
            errors.append('wifi must be a boolean.')
            error = True
        if error == False:
            dbListing.wifi_avail = listing['wifi_avail']

    if "tv_avail" in listing.keys():
        error = False
        if type(listing["tv_avail"]) is not bool:
            errors.append('tv must be a boolean.')
            error = True
        if error == False:
            dbListing.tv_avail = listing['tv_avail']

    if "kitchen_avail" in listing.keys():
        error = False
        if type(listing["kitchen_avail"]) is not bool:
            errors.append('kitchen must be a boolean.')
            error = True
        if error == False:
            dbListing.kitchen_avail = listing['kitchen_avail']

    if "ac_avail" in listing.keys():
        error = False
        if type(listing["ac_avail"]) is not bool:
            errors.append('ac_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.ac_avail = listing['ac_avail']

    if "washer_avail" in listing.keys():
        error = False
        if type(listing["washer_avail"]) is not bool:
            errors.append('washer_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.washer_avail = listing['washer_avail']

    if "dryer_avail" in listing.keys():
        error = False
        if type(listing["dryer_avail"]) is not bool:
            errors.append('dryer_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.dryer_avail = listing['dryer_avail']

    if "hair_dryer_avail" in listing.keys():
        error = False
        if type(listing["hair_dryer_avail"]) is not bool:
            errors.append('hair_dryer_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.hair_dryer_avail = listing['hair_dryer_avail']

    if "parking_avail" in listing.keys():
        error = False
        if type(listing["parking_avail"]) is not bool:
            errors.append('parking_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.parking_avail = listing['parking_avail']

    if "fridge_avail" in listing.keys():
        error = False
        if type(listing["fridge_avail"]) is not bool:
            errors.append('fridge_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.fridge_avail = listing['fridge_avail']

    if "bbq_avail" in listing.keys():
        error = False
        if type(listing["bbq_avail"]) is not bool:
            errors.append('bbq_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.bbq_avail = listing['bbq_avail']

    if "stove_avail" in listing.keys():
        error = False
        if type(listing["stove_avail"]) is not bool:
            errors.append('stove_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.stove_avail = listing['stove_avail']

    if "pool_avail" in listing.keys():
        error = False
        if type(listing["pool_avail"]) is not bool:
            errors.append('pool_avail must be a boolean.')
            error = True
        if error == False:
            dbListing.pool_avail = listing['pool_avail']

    if "check_out" in listing.keys():
        error = False
        if type(listing['check_out']) is not str:
            errors.append(' must be a string')
            error = True
        if type(listing['check_out']) is str:
            try:
             time.strptime(listing['check_in'], '%H:%M')
            except ValueError:
                errors.append("Incorrect check_in format, should be H:M")
                error = True
        if error == False:
            dbListing.check_in = listing['check_in']

    if "check_out" in listing.keys():
        error = False
        if type(listing['check_out']) is not str:
            errors.append('check_out must be a string')
            error = True
        if type(listing['check_out']) is str:
            try:
             time.strptime(listing['check_out'], '%H:%M')
            except ValueError:
                errors.append("Incorrect check_out format, should be H:M")
                error = True
        if error == False:
            dbListing.check_out = listing['check_out']

    if "room_type_id" in listing.keys():
        error = False
        try:
            val = int(listing['room_type_id'])
            if val <= 0 or val > 2147483647:
                errors.append('room_type_id must be greater than 0 and within postgreSQL integer range.')
                error = True
        except ValueError:
            errors.append('room_type_id must be an integer.')
            error = True
        if error == False:
            dbListing.room_type_id = listing['room_type_id']

    if errors:
        return f"Error in fields: {', '.join(errors)}"
    if errors is None:
        return None
