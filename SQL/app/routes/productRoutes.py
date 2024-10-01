from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.config.db import get_db
from app.schemas.product import ProductResponse
from app.controllers.productControllers import get_all_products

router = APIRouter()

# Get all products
@router.get("/products", response_model=list[ProductResponse])
def get_products(db: Session = Depends(get_db)):
    return get_all_products(db)
