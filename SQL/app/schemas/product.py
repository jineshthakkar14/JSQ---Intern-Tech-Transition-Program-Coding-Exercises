from pydantic import BaseModel

class ProductResponse(BaseModel):
    id: int
    title: str
    price: float
    description: str | None
    category: str
    image: str | None
    rating_rate: float | None
    rating_count: int | None

    class Config:
        from_attributes = True  # Updated from 'orm_mode' to 'from_attributes'

class ProductRequest(BaseModel):
    id: int
    title: str
    price: float
    description: str | None
    category: str
    image: str | None
    rating_rate: float
    rating_count: int

    class Config:
        from_attributes = True  # Updated from 'orm_mode' to 'from_attributes'
