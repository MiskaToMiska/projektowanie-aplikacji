import os

def find_html_files():
    root_dir = "."
    grouped_files = {}

    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Pomijaj ukryte katalogi (np. .git)
        dirnames[:] = [d for d in dirnames if not d.startswith('.')]
        
        for filename in filenames:
            if filename.endswith(".html"):
                # Pomijamy główny plik index.html w katalogu głównym
                if dirpath == "." and filename == "index.html":
                    continue

                rel_dir = os.path.relpath(dirpath, root_dir)
                rel_path = os.path.join(rel_dir, filename).replace("\\", "/")

                if rel_dir not in grouped_files:
                    grouped_files[rel_dir] = []
                
                grouped_files[rel_dir].append((filename, rel_path))

    return grouped_files

def generate_html(grouped_files):
    # Sortujemy katalogi alfabetycznie
    sorted_folders = sorted(grouped_files.keys())

    html_lines = [
        "<!DOCTYPE html>",
        '<html lang="pl">',
        "<head>",
        '  <meta charset="UTF-8">',
        "  <title>Spis treści</title>",
        "  <style>",
        "    body { font-family: Arial, sans-serif; margin: 20px; color: #111; }",
        "    h1 { border-bottom: 2px solid #333; padding-bottom: 5px; }",
        "    h2 { margin-top: 20px; margin-bottom: 5px; font-size: 1.1rem; color: #444; }",
        "    ul { margin-top: 5px; padding-left: 20px; }",
        "    li { margin: 3px 0; }",
        "    a { color: #0044cc; text-decoration: none; }",
        "    a:hover { text-decoration: underline; }",
        "  </style>",
        "</head>",
        "<body>",
        "  <h1>Spis treści</h1>"
    ]

    for folder in sorted_folders:
        files = grouped_files[folder]
        html_lines.append(f"  <h2>{folder}/</h2>")
        html_lines.append("  <ul>")
        for name, path in sorted(files):
            html_lines.append(f'    <li><a href="{path}">{name}</a></li>')
        html_lines.append("  </ul>")

    html_lines.extend([
        "</body>",
        "</html>"
    ])

    return "\n".join(html_lines)

if __name__ == "__main__":
    files = find_html_files()
    html_output = generate_html(files)

    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html_output)

    print("Wygenerowano index.html")