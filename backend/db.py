import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).with_name("scores.db")


def _get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with _get_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS scores (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                player_name TEXT NOT NULL,
                score INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        conn.commit()


def save_score(player_name, score):
    with _get_connection() as conn:
        cursor = conn.execute(
            "INSERT INTO scores (player_name, score) VALUES (?, ?)",
            (player_name, score),
        )
        conn.commit()
        return cursor.lastrowid


def get_all_scores(limit=None):
    query = """
        SELECT id, player_name, score, created_at
        FROM scores
        ORDER BY score DESC, id ASC
    """
    params = ()
    if limit is not None:
        query = f"{query} LIMIT ?"
        params = (limit,)

    with _get_connection() as conn:
        rows = conn.execute(query, params).fetchall()
        return [dict(row) for row in rows]
