from .db import db

class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    url = db.Column(db.String(255), nullable=False)

    listing = db.relationship("Listing", back_populates="images")

    def to_dict(self):
        return {
            id: self.id,
            listing_id: self.listing_id,
            url: self.url
        }

