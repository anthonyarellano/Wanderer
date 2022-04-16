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
    washer_avail = db.Column(db.Boolean, nullable=False)
    dryer_avail = db.Column(db.Boolean, nullable=False)
    hair_dryer_avail = db.Column(db.Boolean, nullable=False)
    parking_avail = db.Column(db.Boolean, nullable=False)
    fridge_avail = db.Column(db.Boolean, nullable=False)
    bbq_avail = db.Column(db.Boolean, nullable=False)
    stove_avail = db.Column(db.Boolean, nullable=False)
    pool_avail = db.Column(db.Boolean, nullable=False)
    check_in = db.Column(db.String(255), nullable=False)
    check_out = db.Column(db.String(255), nullable=False)
    room_type_id = db.Column(db.Integer, db.ForeignKey('room_types.id'), nullable=False)
    created_at = db.Column(DateTime, default=datetime.utcnow())

    user = db.relationship("User", back_populates="listings", cascade="all, delete")
    reviews = db.relationship("Review", back_populates="listing", cascade="all, delete")
    images = db.relationship("Image", back_populates="listing", cascade="all, delete")
    reservations = db.relationship("Reservation", back_populates="listing", cascade="all, delete")
    room_type = db.relationship("RoomType", back_populates="listings")

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'title': self.title,
            'bed_number': self.bed_number,
            'bath_number': self.bath_number,
            'bedroom_number': self.bedroom_number,
            'maximum_guests': self.maximum_guests,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'city': self.city,
            'price': self.price,
            'address': self.address,
            'description': self.description,
            'wifi_avail': self.wifi_avail,
            'tv_avail': self.tv_avail,
            'kitchen_avail': self.kitchen_avail,
            'ac_avail': self.ac_avail,
            'washer_avail': self.washer_avail,
            'dryer_avail': self.dryer_avail,
            'hair_dryer_avail': self.hair_dryer_avail,
            'parking_avail': self.parking_avail,
            'fridge_avail': self.fridge_avail,
            'bbq_avail': self.bbq_avail,
            'stove_avail': self.stove_avail,
            'pool_avail': self.pool_avail,
            'check_in': self.check_in,
            'check_out': self.check_out,
            'room_type': self.room_type.type,
            'username': self.user.username,
            'user_photo': self.user.profile_picture
        }

    def to_dict_images(self):
        imageList = []
        if self.images:
            for image in self.images:
                imageList.append(image.to_dict())

        return {
           'id': self.id,
            'owner_id': self.owner_id,
            'title': self.title,
            'bed_number': self.bed_number,
            'bath_number': self.bath_number,
            'bedroom_number': self.bedroom_number,
            'maximum_guests': self.maximum_guests,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'city': self.city,
            'price': self.price,
            'address': self.address,
            'description': self.description,
            'wifi_avail': self.wifi_avail,
            'tv_avail': self.tv_avail,
            'kitchen_avail': self.kitchen_avail,
            'ac_avail': self.ac_avail,
            'washer_avail': self.washer_avail,
            'dryer_avail': self.dryer_avail,
            'hair_dryer_avail': self.hair_dryer_avail,
            'parking_avail': self.parking_avail,
            'fridge_avail': self.fridge_avail,
            'bbq_avail': self.bbq_avail,
            'stove_avail': self.stove_avail,
            'pool_avail': self.pool_avail,
            'check_in': self.check_in,
            'check_out': self.check_out,
            'room_type': self.room_type.type,
            'username': self.user.username,
            'user_photo': self.user.profile_picture,
            'images': imageList,
            'room_type_id': self.room_type_id
        }
