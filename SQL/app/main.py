from fastapi import FastAPI
from app.config.db import check_connection
from app.routes.productRoutes import router as product_router

app = FastAPI()

async def lifespan(app: FastAPI):
    # Perform startup actions
    check_connection()
    yield 

app = FastAPI(lifespan=lifespan)  # Set lifespan as a parameter when creating the app

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI Product API!"}

# Register product routes
app.include_router(product_router)
