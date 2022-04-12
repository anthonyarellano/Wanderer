from .db import db

class RoomType(db.Model):
    __tablename__ = 'room_types'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(255), nullable=False, unique=True)
