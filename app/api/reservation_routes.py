from flask import Blueprint, request, jsonify
from app.models import db, Listing, Image, Reservation

reservation_routes = Blueprint('reservations', __name__)

@reservation_routes.route('/<int:id>')
def get_listing_reservations(id):
    reservations = Reservation.query.filter(Reservation.listing_id == id).order_by(Reservation.start_date).all()
    reservationList = []
    for reservation in reservations:
        reservationList.append(reservation.to_dict())
    return jsonify(reservationList)
