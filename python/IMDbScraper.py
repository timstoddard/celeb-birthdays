from bs4 import BeautifulSoup
from urllib.request import urlopen, urlretrieve

# assumes format of 'First Last (##)'
def format_name_and_age(text):
    data = text.split(' ')
    final_name = len(data)-1
    return '"name":"' +  ' '.join(data[:final_name]) + '","age":' + data[final_name][1:len(data[final_name])-1]

# strips the query string
def format_name_link(text):
    last_char = text.index('?')
    return text[:last_char]

# downloads the image from the link
def get_img(url, count):
    urlretrieve(url, 'python/images/celeb' + str(count) + '.jpg')

page = urlopen('http://imdb.com', timeout=10)
soup = BeautifulSoup(page, 'html.parser')
born_today_raw = soup.findAll('div', {'class': 'widget_image'})
born_today = [];

json_string = '{'

for prop in born_today_raw:
    if '<a href="/name/nm' in str(prop):
        born_today.append(prop)

for i in range(len(born_today)):
    
    json_string += '"celeb' + str(i + 1) + '":{'
    
    inner_page = urlopen(format_name_link('http://imdb.com' + born_today[i].findAll('a')[0]['href']), timeout=10)
    get_img(BeautifulSoup(inner_page, 'html.parser').findAll('img', {'id': 'name-poster'})[0]['src'], i - 8)
    
    name_and_age = format_name_and_age(born_today[i].findAll('div')[1].text.strip())
    json_string += name_and_age
    
    json_string += '}' + (',' if i < 13 else '') + '\n'

json_string += '}'
print(json_string)

f = open('python/json/info.json', 'w')
f.write(json_string)