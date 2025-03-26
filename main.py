from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()

# ...existing code...

@app.get("/pant-image")
async def get_pant_image():
    return FileResponse("static/pant.jpg")

# ...existing code...
