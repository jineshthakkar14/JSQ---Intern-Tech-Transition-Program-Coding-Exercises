from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import OperationalError
from sqlalchemy.ext.declarative import declarative_base

# Database URL
DATABASE_URL = "postgresql://productdb_owner:aszAvjF1cg6M@ep-yellow-dust-a5apiurt.us-east-2.aws.neon.tech/productdb"  # Update this line

# Create engine and session
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def check_connection():
    """Check if the database connection is successful."""
    try:
        # Create a connection
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))  # Use text() to create an executable object
        print("Database connected successfully.")
    except OperationalError as e:
        print(f"Database connection failed: {e}")

def get_db():
    """Dependency that provides a database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    """Create database tables."""
    Base.metadata.create_all(bind=engine)
