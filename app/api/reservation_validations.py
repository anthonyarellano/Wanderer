# import datetime
from datetime import datetime


def verify_reservation_fields(reservation):
    missing_fields = []
    if 'user_id' not in reservation.keys():
        missing_fields.append('user_id')
    if 'listing_id' not in reservation.keys():
        missing_fields.append('listing_id')
    if 'total_cost' not in reservation.keys():
        missing_fields.append('total_cost')
    if 'start_date' not in reservation.keys():
        missing_fields.append('start_date')
    if 'end_date' not in reservation.keys():
        missing_fields.append('end_date')
    if 'guests' not in reservation.keys():
        missing_fields.append('guests')
    if len(missing_fields):
        return f"Missing Fields: {', '.join(missing_fields)}"
    if missing_fields is None:
        return None


def verify_reservation_values(reservation):
    errors = []
    if type(reservation['user_id']) is not int:
        try:
            val = int(reservation['user_id'])
            if val <= 0 or val > 2147483647:
                errors.append('user_id must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('user_id must be an integer.')
    if type(reservation['user_id']) is int:
        if reservation['user_id'] <= 0 or reservation['user_id'] > 2147483647:
            errors.append('user_id must be greater than 0 and within postgreSQL integer range.')

    if type(reservation['listing_id']) is not int:
        try:
            val = int(reservation['listing_id'])
            if val <= 0 or val > 2147483647:
                errors.append('listing_id must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('listing_id must be an integer.')
    if type(reservation['listing_id']) is int:
        if reservation['listing_id'] <= 0 or reservation['listing_id'] > 2147483647:
            errors.append('listing_id must be greater than 0 and within postgreSQL integer range.')

    if type(reservation['total_cost']) is not int:
        try:
            val = int(reservation['total_cost'])
            if val <= 0 or val > 2147483647:
                errors.append('total_cost must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('total_cost must be an integer.')
    if type(reservation['total_cost']) is int:
        if reservation['total_cost'] <= 0 or reservation['total_cost'] > 2147483647:
            errors.append('total_cost must be greater than 0 and within postgreSQL integer range.')

    if type(reservation['guests']) is not int:
        try:
            val = int(reservation['guests'])
            if val <= 0 or val > 2147483647:
                errors.append('guests must be greater than 0 and within postgreSQL integer range.')
        except ValueError:
            errors.append('guests must be an integer.')
    if type(reservation['guests']) is int:
        if reservation['guests'] <= 0 or reservation['guests'] > 2147483647:
            errors.append('guests must be greater than 0 and within postgreSQL integer range.')

    if type(reservation['start_date']) is not str:
        errors.append('start_date must be a string')
    if type(reservation['start_date']) is str:
        try:
            datetime.strptime(reservation['start_date'], '%Y-%m-%d')
            if datetime.strptime(reservation['start_date'], '%Y-%m-%d') < datetime.now():
                errors.append("start_date must be in the future.")
        except ValueError:
            errors.append("Incorrect start_date format, should be YYYY-MM-DD")

    if type(reservation['end_date']) is not str:
        errors.append('end_date must be a string')
    if type(reservation['end_date']) is str:
        try:
            datetime.strptime(reservation['end_date'], '%Y-%m-%d')
            if datetime.strptime(reservation['end_date'], '%Y-%m-%d') < datetime.now():
                errors.append("end_date must be in the future.")
        except ValueError:
            errors.append("Incorrect end_date format, should be YYYY-MM-DD")
    if errors:
        return f"Error in fields: {', '.join(errors)}"
    else:
        return None
