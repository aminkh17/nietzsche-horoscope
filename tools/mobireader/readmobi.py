import ebooklib
from ebooklib import epub
import json
import html2text

filename = "./resources/Friedrich+Wilhelm+Nietzsche+-+Thus+Spake+Zarathustra.epub"

book = epub.read_epub(filename)

all_items = book.get_items()

# Create a dictionary to store the book data
book_data = {}

# Iterate over all items in the book
for item in all_items:
    # Check if the item is a document (i.e., a chapter or section)
    if item.get_type() == ebooklib.ITEM_DOCUMENT:
        # Get the item's name and content
        item_name = item.get_name()
        # convert get_body_content tp 
        item_content = item.get_body_content()
        item_content = item_content.decode('utf-8')


        # Convert HTML content to plain text
        h = html2text.HTML2Text()
        h.ignore_images = True
        h.ignore_links = True
        h.ignore_scripts = True
        item_content = h.handle(item_content)

        # Add the item to the book data dictionary
        book_data[item_name] = item_content

# Convert the book data to JSON
book_json = json.dumps(book_data, indent=4)

# write json file in a file in the resource folder
with open("./resources/book_data.json", "w") as f:
    f.write(book_json)




