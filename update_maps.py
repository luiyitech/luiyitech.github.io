import re

with open('alojamientos.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace google maps links
new_text = re.sub(
    r'href="https://www\.google\.com/maps/search/\?api=1&query=[^"]+"',
    'href="https://www.google.com/maps/d/u/0/viewer?mid=1lRK43NuNkXAjqz_tBxs9rdGEgFsO9l4&ll=-31.732850068049398%2C-60.502257849999985&z=14"',
    text
)

with open('alojamientos.html', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Map links updated successfully.")
