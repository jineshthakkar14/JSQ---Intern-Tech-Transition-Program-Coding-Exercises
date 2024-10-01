from sqlalchemy.orm import Session
from app.models.product import Product

# Get all products
def get_all_products(db: Session):
    return db.query(Product).all()

# Get a product by its ID
def get_product_by_id(product_id: int, db: Session):
    return db.query(Product).filter(Product.id == product_id).first()