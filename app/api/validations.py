def verify_image_fields(images):
    missing_fields = []
    for image in images:
        if 'listing_id' not in images.keys():
            missing_fields.append('listing_id')
        if 'url' not in images.keys():
            missing_fields.append('url')
    if len(missing_fields):
        return f"Error in fields: {', '.join(missing_fields)}"
    else:
         return None

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
