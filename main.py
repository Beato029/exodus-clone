import sys
import os
from PyQt6.QtWidgets import QApplication, QMainWindow
from PyQt6.QtWebEngineWidgets import QWebEngineView
from PyQt6.QtCore import QUrl

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
