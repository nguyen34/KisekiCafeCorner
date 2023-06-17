Required Tools and Libraries
sudo apt-get update
npm 
Commands to run: 
sudo apt install npm 

pip
Commands to run:
sudo apt install pip
sudo apt install pipenv

PostgreSQL
sudo apt-get install postgresql

Database setup
(https://harshityadav95.medium.com/postgresql-in-windows-subsystem-for-linux-wsl-6dc751ac1ff3)
sudo -u postgres psql

ALTER USER jnguyen WITH PASSWORD 'SenNoKiseki4!';
CREATE DATABASE kiseki;

Setup Instructions
# From root directory
Build and run frontend:
./kc.sh f build
./kc.sh f run

Build and run backend:
./kc.sh b env
./kc.sh b migrate (If first time running)
./kc.sh b run

# Troubleshoot
(https://stackoverflow.com/questions/70943244/attributeerror-module-collections-has-no-attribute-mutablemapping)
pip install --upgrade pip wheel setuptools requests

No module named 'urllib3'
urllib3
# From backend directory
pip install urllib3

(https://stackoverflow.com/questions/72028871/pipenv-fails-with-attributeerror-after-upgrading-from-ubuntu-20-04-to-22-04)
(https://stackoverflow.com/questions/26072426/import-error-django-corsheaders)
(https://stackoverflow.com/questions/33308781/django-rest-framework-no-module-named-rest-framework)
(https://stackoverflow.com/questions/8237842/django-core-exceptions-improperlyconfigured-error-loading-psycopg-module-no-mo)
(https://stackoverflow.com/questions/12906351/importerror-no-module-named-psycopg2)