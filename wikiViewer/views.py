from wikiViewer import wiki_page
from flask import render_template


@wiki_page.route('/')
def wiki_search():
    return render_template('index.html')
