from sqlalchemy.orm import Session
from app.models.product import Product

# Get all products
def get_all_products(db: Session):
    return db.query(Product).all()