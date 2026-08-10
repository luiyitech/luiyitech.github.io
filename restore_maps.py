import re

links = [
    "https://www.google.com/maps/search/?api=1&query=Maran+Suites+%26+Towers%2C+Alameda+de+la+Federaci%C3%B3n+698%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Howard+Johnson+by+Wyndham+Plaza+Hotel+Mayorazgo%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Hotel+Coe+Vera%2C+Almafuerte+890%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Gran+Hotel+Paran%C3%A1%2C+Gral.+Justo+Jos%C3%A9+de+Urquiza+976%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Hotel+apart+PH+236%2C+Villaguay+236%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=C%C3%ADrculo+de+Suboficiales+de+la+Fuerza+A%C3%A9rea+Delegaci%C3%B3n+Paran%C3%A1%2C+Belgrano+157%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Hotel+San+Jorge%2C+Belgrano+368%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Hostel+Las+Magnolias%2C+Ferre+236%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=CIRSE+Paran%C3%A1%2C+Andr%C3%A9s+Pasos+403%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Agust%C3%ADn+I+Apart+Hotel%2C+Ferre+130%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Las+Ma%C3%B1anitas+Casa+Hotel%2C+Enrique+Carb%C3%B3+62%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Parador+862%2C+Gualeguaych%C3%BA+862%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Hotel+Bristol%2C+Alsina+221%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Caba%C3%B1as+Los+Eucaliptus%2C+Paran%C3%A1",
    "https://www.google.com/maps/search/?api=1&query=Parador+del+Paran%C3%A1%2C+Av.+Rep.+de+Entre+R%C3%ADos+3005%2C+Paran%C3%A1"
]

with open('alojamientos.html', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'href="https://www.google.com/maps/d/u/0/viewer?mid=1lRK43NuNkXAjqz_tBxs9rdGEgFsO9l4&ll=-31.732850068049398%2C-60.502257849999985&z=14"'

def replace_link(match):
    if not links:
        return match.group(0) # In case there are extra, though there shouldn't be
    link = links.pop(0)
    return f'href="{link}"'

new_text = re.sub(re.escape(target), replace_link, text)

with open('alojamientos.html', 'w', encoding='utf-8') as f:
    f.write(new_text)

print(f"Links remaining: {len(links)}")
