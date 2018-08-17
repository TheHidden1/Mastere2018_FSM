import csv
import json

csvfile = open('cadit.csv', 'r',encoding="utf8")
jsonfile = open('formated.json', 'w')
# "N_Dossier","Nom","Prénom","Nature_diplôme_obtenu","Choix_1","Choix_2","Choix_3","Choix_4","Score"
fieldnames = ("N_Dossier","Nom","Prenom","Nature_diplome_obtenu","Choix_1","Choix_2","Choix_3","Choix_4","Score")
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)