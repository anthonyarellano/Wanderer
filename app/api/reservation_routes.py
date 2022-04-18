from flask import Blueprint, request, jsonify, abort
from app.models import db, Listing, Image, Reservation

reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('/listing/<int:id>')
def get_listing_reservations(id):
    reservations = Reservation.query.filter(Reservation.listing_id == id).order_by(Reservation.start_date).all()
    reservationList = []
    for reservation in reservations:
        reservationList.append(reservation.to_dict())
    return jsonify(reservationList)


@reservation_routes.route('/<int:id>')
def get_reservation(id):
    reservation = Reservation.query.get(id)
    if reservation is None:
        abort(404)
    return reservation.to_dict()


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
    newReservation = Reservation(
        user_id=reservation['user_id'],
        listing_id=reservation['listing_id'],
        total_cost=reservation['total_cost'],
        start_date=reservation['start_date'],
        end_date=reservation['end_date']
    )
    db.session.add(newReservation)
    db.session.commit()
    return newReservation.to_dict()
