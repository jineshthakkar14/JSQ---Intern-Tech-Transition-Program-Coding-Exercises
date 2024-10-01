from pydantic import BaseModel

class ProductResponse(BaseModel):
    id: int
    title: str
    price: float
    description: str | None
    category: str
    image: str | None
    rating_rate: float
    rating_count: int

    class Config:
        orm_mode = True
