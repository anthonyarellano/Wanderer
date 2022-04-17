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
    created_at = db.Column(DateTime, default=datetime.utcnow())

    user = db.relationship("User", back_populates="reservations")
    listing = db.relationship("Listing", back_populates="reservations")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "total_cost": self.total_cost,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "listing_title": self.listing.title,
            "host": self.user.username
        }
