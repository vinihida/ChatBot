#main.py

# Import the Flask module that has been installed.
from flask import Flask, request, json
from flask_cors import CORS 


from langchain.llms import OpenAI
# Creating a new "app" by using the Flask constructor. Passes __name__ as a parameter.
app = Flask(__name__)
CORS(app)

# Annotation that allows the function to be hit at the specific URL.
@app.route("/", methods=["GET", "POST"])
# Generic Python functino that returns "Hello world!"
def index():
    if request.method == 'POST':

        text = json.loads(request.data)
        print()
        llm = OpenAI(temperature=0.9)
        return llm(text['text'])

# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()

    