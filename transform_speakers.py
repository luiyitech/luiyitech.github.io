from bs4 import BeautifulSoup
import re

# Read index.html
with open('c:/Users/Administrador/Documents/Workspace/PoliciaCientifica/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Replace the section wrapper classes
ponentes_section = soup.find('section', id='ponentes')
if ponentes_section:
    if 'bg-white' in ponentes_section.get('class', []):
        ponentes_section['class'].remove('bg-white')
        ponentes_section['class'].append('ponentes-section-premium')
    
    # insert pattern div if not exists
    if not ponentes_section.find('div', class_='exponentes-pattern'):
        pattern_div = soup.new_tag('div')
        pattern_div['class'] = 'exponentes-pattern'
        ponentes_section.insert(0, pattern_div)

# Find all cards
cards = soup.find_all('div', class_=re.compile(r'card-hover-ponentes'))

for card in cards:
    modal_id = card.get('data-modal-id', '')
    img = card.find('img', class_='ponente-image')
    img_src = img['src'] if img else ''
    img_alt = img['alt'] if img else ''
    
    country_p = card.find('b')
    country = country_p.text.strip() if country_p else ''
    
    name_h3 = card.find('h3', class_='text-primary')
    name = name_h3.text.strip() if name_h3 else ''
    
    # Title is the last paragraph
    ps = card.find_all('p', class_='text-gray-600')
    title = ""
    for p in reversed(ps):
        if not p.find('b'):
            title = p.text.strip()
            break
            
    # Remove all contents of the card
    card.clear()
    
    # Update card class
    card['class'] = ['speaker-card-premium', 'cursor-pointer']
    
    # Build new contents
    # Wrapper for img
    wrapper = soup.new_tag('div')
    wrapper['class'] = 'speaker-img-wrapper'
    
    new_img = soup.new_tag('img')
    new_img['src'] = img_src
    new_img['alt'] = img_alt
    new_img['class'] = 'speaker-img-premium'
    wrapper.append(new_img)
    
    card.append(wrapper)
    
    # Country
    new_country = soup.new_tag('p')
    new_country['class'] = 'speaker-country'
    new_country.string = country
    card.append(new_country)
    
    # Name
    new_name = soup.new_tag('h3')
    new_name['class'] = 'speaker-name'
    new_name.string = name
    card.append(new_name)
    
    # Divider
    new_div = soup.new_tag('div')
    new_div['class'] = 'speaker-divider'
    card.append(new_div)
    
    # Title
    new_title = soup.new_tag('p')
    new_title['class'] = 'speaker-title'
    new_title.string = title
    card.append(new_title)

# Write back
with open('c:/Users/Administrador/Documents/Workspace/PoliciaCientifica/index.html', 'w', encoding='utf-8') as f:
    f.write(str(soup))

print("HTML transformations completed successfully.")
