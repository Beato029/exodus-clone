import sys
import os
from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtWebEngineWidgets import QWebEngineView
from PyQt6.QtCore import QUrl

# def send_connection():
#     from supabase import create_client, Client
#     url = "https://rspablyxuoswwtveyavh.supabase.co"
#     key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcGFibHl4dW9zd3d0dmV5YXZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNjEwMzksImV4cCI6MjA5ODkzNzAzOX0.iMGo5sqXEz4ng5XI2aFUEo2V4CwiCb5Z4jy2b4jyM6c"
#     supabase: Client = create_client(url, key)
#     data = {
#         "connection": "Application Open"
#     }
#     response = supabase.table("data").insert(data).execute()

class Browser(QMainWindow):
    def __init__(self):
        super().__init__()
        
        self.setWindowTitle("EXODUS 26.7.1")

        screen = QApplication.primaryScreen()
        screen_geometry = screen.geometry()

        perc = 0.65
        w = int(screen_geometry.width() * perc)
        h = int(screen_geometry.height() * perc)

        self.setMinimumSize(w, h)

        self.browser = QWebEngineView()

        base_path = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.join(base_path, "Content/index.html")


        self.browser.load(QUrl.fromLocalFile(file_path))

        self.setCentralWidget(self.browser)

        # send_connection()


app = QApplication(sys.argv)
window = Browser()
window.show()
sys.exit(app.exec())