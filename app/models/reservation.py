from .db import db
from sqlalchemy.types import DateTime
from datetime import datetime

class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    total_cost = db.Column(db.Integer, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    guests = db.Column(db.Integer, nullable=False)
    created_at = db.Column(DateTime, default=datetime.utcnow())

    user = db.relationship("User", back_populates="reservations")
    listing = db.relationship("Listing", back_populates="reservations")

    def to_dict(self):
        imageList = []
        for image in self.listing.images:
            imageDict = image.to_dict()
            imageReady = imageDict['url'].split('=index?')[0]
            imageList.append(imageReady)
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "total_cost": self.total_cost,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "listing_title": self.listing.title,
            "host": self.listing.user.username,
            "listing_image": self.listing.images[0].to_dict(),
            "city": self.listing.city,
            "image_list": imageList,
            "check_in": self.listing.check_in,
            "check_out": self.listing.check_out,
            "lat": self.listing.latitude,
            "lng": self.listing.longitude,
            "listing_id": self.listing.id,
            "guests": self.guests
        }
