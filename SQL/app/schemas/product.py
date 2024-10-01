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
        orm_mode = True
