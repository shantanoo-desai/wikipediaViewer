from flask import Flask

wiki_page = Flask(__name__)

from wikiViewer import views
