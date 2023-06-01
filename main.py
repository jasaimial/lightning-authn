from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from webui import webui_router

app = FastAPI(
    title="Lightning AuthN"
)

app.mount("/static", StaticFiles(directory="static"), name="static")
# app.mount("/webui", StaticFiles(directory="webui/component"), name="webuicomp")

app.include_router(webui_router)

@app.get("/hello")
async def hello():
    return "Hello, FastAPI"
