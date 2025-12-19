# download_images.py
import os
from icrawler.builtin import GoogleImageCrawler, BingImageCrawler

# Make sure the directories exist
os.makedirs("./dataset/duck", exist_ok=True)
os.makedirs("./dataset/not_duck", exist_ok=True)

def download_images(query, output_dir, limit=15):
    """Download images using icrawler with Bing"""
    print(f"Downloading {query} images...")
    
    try:
        # Use Bing by default since Google is blocking
        crawler = BingImageCrawler(storage={'root_dir': output_dir})
        crawler.crawl(keyword=query, max_num=limit)
        print(f"Downloaded {query} images to {output_dir}\n")
        
    except Exception as e:
        print(f"Error downloading {query}: {e}\n")

# Download duck images - use "mallard duck" to get real duck photos
download_images("mallard duck", "./dataset/duck", 15)

# Download not_duck images - try different search terms
download_images("dog", "./dataset/not_duck", 10)
download_images("cat", "./dataset/not_duck", 5)

print("Download complete! Images saved to dataset/duck and dataset/not_duck")
