FROM tiangolo/uvicorn-gunicorn:python3.7

RUN pip install bocadillo

COPY ./app /app