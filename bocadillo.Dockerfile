FROM tiangolo/uvicorn-gunicorn:python3.7


RUN pip install bocadillo pony psycopg2

EXPOSE 80