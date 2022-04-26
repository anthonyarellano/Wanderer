from flask import Blueprint, request, jsonify, abort
from app.models import db, Listing, Image, Reservation
from .reservation_validations import verify_reservation_fields, verify_reservation_values

reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('/listing/<int:id>')
def get_listing_reservations(id):
    reservations = Reservation.query.filter(Reservation.listing_id == id).order_by(Reservation.start_date).all()
    reservationList = []
    for reservation in reservations:
        reservationList.append(reservation.to_dict())
    return jsonify(reservationList)


@reservation_routes.route('/<int:id>', methods=["PUT"])
def edit_reservation(id):
    currentReservation = request.json
    dbReservation = Reservation.query.get(id)
    dbReservation.total_cost = currentReservation['total_cost']
    dbReservation.start_date = currentReservation['start_date']
    dbReservation.end_date = currentReservation['end_date']
    dbReservation.guests = currentReservation['guests']
    db.session.commit()
    return dbReservation.to_dict()


@reservation_routes.route('/<int:id>')
def get_reservation(id):
    reservation = Reservation.query.get(id)
    if reservation is None:
        abort(404)
    return reservation.to_dict()


@reservation_routes.route('/delete/<int:id>', methods=["DELETE"])
def delete_reservation(id):
    reservation = Reservation.query.get(id)
    db.session.delete(reservation)
    db.session.commit()
    return jsonify("Success")


@reservation_routes.route('/user/<int:id>')
def get_user_reservations(id):
    reservations = Reservation.query.filter(Reservation.user_id == id).order_by(Reservation.start_date).all()
    reservationList = []
    for reservation in reservations:
        reservationList.append(reservation.to_dict())
    return jsonify(reservationList)


@reservation_routes.route('/', methods=["POST"])
def create_reservation():
    reservation = request.json
    field_error = verify_reservation_fields(reservation)
    if field_error:
        print(field_error)
        response = jsonify({'message': field_error})
        response.status_code = 400
        return response
    value_error = verify_reservation_values(reservation)
    if value_error:
        print(value_error)
        response = jsonify({'message': value_error})
        response.status_code = 400
        return response

    newReservation = Reservation(
        user_id=reservation['user_id'],
        listing_id=reservation['listing_id'],
        total_cost=reservation['total_cost'],
        start_date=reservation['start_date'],
        end_date=reservation['end_date'],
        guests=reservation['guests']
    )
    db.session.add(newReservation)
    db.session.commit()
    return newReservation.to_dict()
