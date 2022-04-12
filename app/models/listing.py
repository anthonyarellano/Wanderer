from .db import db
from sqlalchemy.types import DateTime
from datetime import datetime

class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    bed_number = db.Column(db.Integer, nullable=False)
    bath_number = db.Column(db.Integer, nullable=False)
    bedroom_number = db.Column(db.Integer, nullable=False)
    maximum_guests = db.Column(db.Integer, nullable=False)
    latitude = db.Column(db.Float, nullable=True)
    longitude = db.Column(db.Float, nullable=True)
    city = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    wifi_avail = db.Column(db.Boolean, nullable=False)
    tv_avail = db.Column(db.Boolean, nullable=False)
    kitchen_avail = db.Column(db.Boolean, nullable=False)
    ac_avail = db.Column(db.Boolean, nullable=False)
    heat_avail = db.Column(db.Boolean, nullable=False)
    pool_avail = db.Column(db.Boolean, nullable=False)
    check_in = db.Column(db.String(255), nullable=False)
    check_out = db.Column(db.String(255), nullable=False)
    room_type = db.Column(db.String(255), nullable=False)
    created_at = db.Column(DateTime, default=datetime.utcnow())

    user = db.relationship("User", back_populates="listings", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="listing", cascade="all, delete")
    images = db.relationship("Image", back_populates="listing", cascade="all, delete")
    reservations = db.relationship("Reservation", back_populates="listing", cascade="all, delete")
