# FastAPI + SQLAlchemy 2 + Alembic + PostgreSQL + Pydantic + FakeStoreAPI

### The project includes:
- FastAPI
- SQLAlchemy 2
- Alembic
- PostgreSQL
- Pydantic for validation
- API for managing products from FakeStore API

This is a starter template for creating APIs with FastAPI, SQLAlchemy 2, Alembic, and PostgreSQL with an added feature of managing product data from the FakeStore API. The project includes a fully structured setup that allows you to create APIs and manage the database migrations seamlessly.

The project environment setup is located in the `/app/config/db.py` directory. The project follows a feature-based architecture to help you structure your application better.

## Features Added

- **Product Management**: API to manage products data fetched from FakeStore API.
- **Database Migrations**: Alembic-based migration to manage database schema.
- **PostgreSQL Database**: A PostgreSQL database connection with SQLAlchemy ORM.
- **Testing via Postman**: You can test the API endpoints using Postman.
- **Pydantic Models**: For validation and schema enforcement.

## How to use this starter

### 1. Create a virtual environment with Python:
```bash
python -m venv .venv
```


### 2. Activate the virtual environment:
```bash
venv\Scripts\activate
```

### 3. Install the required dependencies::
```bash
pip install -r requirements.txt
```


### 4. Activate the virtual environment:
```bash
venv\Scripts\activate
```

### 4. Initialize Alembic and run migrations to create the products table:
```bash
alembic revision --autogenerate -m "Create products table"
alembic upgrade head
```

### 5. Start the FastAPI server:
```bash
uvicorn app.main:app --reload
```

### 6. Fetch products from FakeStore API
```bash
python -m app.fetchProducts
```

### 6. Testing with Postman:

## 1.GET /products, get all products

![image](https://github.com/user-attachments/assets/05d21853-5fe6-4c1c-85f2-a85b3455f2c3)

## 2.GET /products/{id}, get product by id

![image](https://github.com/user-attachments/assets/513d2349-f6ab-47b6-b3bc-92a861911d51)

## 3.POST /products/{id}, add_product

![image](https://github.com/user-attachments/assets/ff408b7f-c3bb-42a4-990f-b5dcd7dec3d7)

### 7. Shutting down the FastAPI Server

To stop the server, press CTRL+C in your terminal.

### 8. Rollback Migrations

```bash
alembic downgrade -1
```








