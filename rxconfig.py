import reflex as rx
import os

class Config(rx.Config):
    pass

config = rx.Config(
    app_name="portafolio",
    api_port=int(os.getenv("PORT", "8000")),
    deploy_url="https://wallet-port-oficial.onrender.com"
)