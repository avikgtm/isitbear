from flask import Flask, session, jsonify, request, render_template, send_from_directory
import os, random
import db

app = Flask(__name__)
app.secret_key = ""

db.init_db() 

duck_images = [(f, "duck") for f in os.listdir("dataset/duck")]
not_duck_images = [(f, "not_duck") for f in os.listdir("dataset/not_duck")]
ALL_IMAGES = duck_images + not_duck_images

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
    return app.send_static_file(f"dataset/{folder}/{filename}")

@app.route("/scores", methods=["POST"])
def save_score():
    """Save a score to the database"""
    try:
        data = request.get_json()
        score = data.get("score")
        
        if score is None:
            return jsonify({"error": "Score is required"}), 400
        
        score_id = db.save_score(score)
        
        return jsonify({
            "success": True,
            "id": score_id,
            "score": score
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
