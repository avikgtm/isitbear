from flask import Flask, session, jsonify, request, send_from_directory
import os
import random
import db

app = Flask(__name__)
app.secret_key = "dev-secret-key-change-me"

db.init_db()

DATASET_DIR = os.path.join(app.root_path, "dataset")
DUCK_DIR = os.path.join(DATASET_DIR, "duck")
NOT_DUCK_DIR = os.path.join(DATASET_DIR, "not_duck")

duck_images = (
    [(f, "duck") for f in os.listdir(DUCK_DIR)]
    if os.path.isdir(DUCK_DIR)
    else []
)
not_duck_images = (
    [(f, "not_duck") for f in os.listdir(NOT_DUCK_DIR)]
    if os.path.isdir(NOT_DUCK_DIR)
    else []
)
ALL_IMAGES = duck_images + not_duck_images


@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        return app.make_default_options_response()


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response

@app.route("/")
def home():
    return "Welcome to the home page"

@app.route("/game/start")
def start_game():
    session['score'] = 0
    session['images'] = random.sample(ALL_IMAGES, len(ALL_IMAGES))
    session['index'] = 0
    return next_image()


@app.route("/game/guess", methods=["POST"])
def guess():
    data = request.get_json()
    user_choice = data.get("choice")
    correct_label = session.get('current_label')

    if user_choice != correct_label:
        final_score = session.get('score', 0)
        session.clear()
        return jsonify({"finished": True, "score": final_score})

    session['score'] += 1
    session['index'] += 1
    return next_image()

def next_image():
    if 'images' not in session or session['index'] >= len(session['images']):
        return jsonify({"finished": True, "score": session.get('score', 0)})

    img_name, label = session['images'][session['index']]
    folder = "duck" if label == "duck" else "not_duck"
    session['current_label'] = label

    return jsonify({
        "url": f"/dataset/{folder}/{img_name}",
        "finished": False,
        "score": session['score']
    })

@app.route("/dataset/<folder>/<filename>")
def serve_image(folder, filename):
    dataset_dir = os.path.join(app.root_path, "dataset", folder)
    return send_from_directory(dataset_dir, filename)

@app.route("/scores", methods=["POST"])
def save_score():
    """Save a score to the database"""
    try:
        data = request.get_json()
        score = data.get("score")
        player_name = data.get("player_name")
        
        if score is None or player_name is None:
            return jsonify({"error": "Score and player_name are required"}), 400
        
        score_id = db.save_score(player_name, score)
        
        return jsonify({
            "success": True,
            "id": score_id,
            "score": score,
            "player_name": player_name
        }), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/scores", methods=["GET"])
def get_scores():
    """Get all scores from the database"""
    try:
        scores = db.get_all_scores()
        return jsonify({"scores": scores}), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
