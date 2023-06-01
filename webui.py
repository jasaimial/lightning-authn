from fastapi.routing import APIRouter
from fastapi.responses import FileResponse, HTMLResponse

from jinja2 import Environment, FileSystemLoader

webui_router: APIRouter = APIRouter(tags=["Website routes"])

@webui_router.get("/favicon.ico", response_class=FileResponse)
async def favicon():
    return FileResponse("static/img/books.png")

@webui_router.get("/component/{component_path}", response_class=FileResponse)
async def get_webui_component(component_path):
    return FileResponse("webui/component/{}".format(component_path))

@webui_router.get("/", response_class=HTMLResponse)
async def default():
    env = Environment(loader=FileSystemLoader("webui/"))
    env.globals["title"] = "Lightning Authn"
    template = env.get_template("index.html")
    return template.render(name = "Jinja2")