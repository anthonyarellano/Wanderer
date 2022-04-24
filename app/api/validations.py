import datetime

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
    if len(listing['title']) <= 0 or len(listing['title']) > 255:
        errors.append('title must be between 1 and 255 characters.')
    if listing['bed_number'] <= 0 or listing['bed_number'] > 2147483647:
        errors.append('bed_number must be greater than 0 and within postgreSQL integer range.')
    if listing['bath_number'] <= 0 or listing['bed_number'] > 2147483647:
         errors.append('bath_number must be greater than 0 and within postgreSQL integer range.')
    if listing['bedroom_number'] <= 0 or listing['bed_number'] > 2147483647:
         errors.append('bedroom_number must be greater than 0 and within postgreSQL integer range.')
    if listing['maximum_guests'] <= 0 or listing['bed_number'] > 2147483647:
         errors.append('maximum_guests must be greater than 0 and within postgreSQL integer range.')
    if listing['price'] <= 0 or listing['price'] > 2147483647:
         errors.append('price must be greater than 0 and within postgreSQL integer range.')
    if listing['latitude'] > 90 or listing['latitude'] < -90:
        errors.append('Invalid latitude.')
    if listing['longitude'] > 180 or listing['longitude'] < -180:
        errors.append('Invalid longitude.')
    if len(listing['city']) <= 0 or len(listing['city']) > 255:
        errors.append('city must be greater than 0 and less than 255 characters.')
    if len(listing['address']) <= 0 or len(listing['address']) > 255:
        errors.append('address must be greater than 0 and less than 255 characters.')
    if len(listing['state']) <= 0 or len(listing['state']) > 255:
        errors.append('state must be greater than 0 and less than 255 characters.')
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
        errors.append('check_in must be a string formatted YYYY-MM-DD')
    if type(listing['check_in']) is str:
        try:
            datetime.datetime.strptime(listing['check_in'], '%Y-%m-%d')
        except ValueError:
            errors.append("Incorrect check_in format, should be YYYY-MM-DD")
    if type(listing['check_out']) is not str:
        errors.append('check_out must be a string formatted YYYY-MM-DD')
    if type(listing['check_out']) is str:
        try:
            datetime.datetime.strptime(listing['check_out'], '%Y-%m-%d')
        except ValueError:
            errors.append("Incorrect check_out format, should be YYYY-MM-DD")
    if type(listing['room_type_id']) is not int:
        errors.append('room_type_id must be an integer.')
    if type(listing['room_type_id']) is int:
        if listing['room_type_id'] <= 0 or listing['room_type_id'] > 6:
            errors.append('room_type_id must be an integer between 1 and 6.')
    if errors:
        return f"Error in fields: {', '.join(errors)}"
    else:
        return None
