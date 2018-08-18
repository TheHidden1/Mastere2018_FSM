  // data manupulation stuff 
  let Sum = 0;
  let avgScore;
  let ValidUsers = 0;
  let minScore = parseFloat(data[0]["Score"].replace(/,/, '.'));
  let maxScore = parseFloat(data[0]["Score"].replace(/,/, '.'));
  let DiplomaTypes = [];
  let Choix_1 = [];


  let Analytics = {
      AllValidUsers: 0,
      AvgScore: 0,
      MinScore: parseFloat(data[0]["Score"].replace(/,/, '.')),
      MaxScore: parseFloat(data[0]["Score"].replace(/,/, '.')),
      ChoiceStats: [],
      DiplomaStats: [],

      ChoiceStatsLF: [],
      ChoiceStatsLA: [],
      ChoiceStatsGENIE: [],
      ChoiceStatsMASRE: [],
      ChoiceStatsMASPRO: [],
      ChoiceStatsMET: [],

      Nbr_Sum_Min_Max_Scores: [],
      Nbr_Sum_Min_Max_Scores_Mastere: [],

  }
  let TempSum;
  //"N_Dossier","Nom","Prénom","Nature_diplôme_obtenu","Choix_1","Choix_2","Choix_3","Choix_4","Score"
  // main loop 
  data.forEach(candit => {
      let score = parseFloat(candit["Score"].replace(/,/, '.'));
      if (score != null && score > 0) {
          Analytics.AllValidUsers++;
          TempSum += score;





          //Diplome Stats
          if (Analytics.DiplomaStats[candit["Nature_diplome_obtenu"]] == null) Analytics.DiplomaStats[candit["Nature_diplome_obtenu"]] = 1;
          else Analytics.DiplomaStats[candit["Nature_diplome_obtenu"]]++;

          if (Analytics.ChoiceStats[candit["Choix_1"]] == null) Analytics.ChoiceStats[candit["Choix_1"]] = 1;
          else Analytics.ChoiceStats[candit["Choix_1"]]++;

          switch (candit["Nature_diplome_obtenu"]) {
              case "Licence fondamentale":
                  if (Analytics.ChoiceStatsLF[candit["Choix_1"]] == null) Analytics.ChoiceStatsLF[candit["Choix_1"]] = 1;
                  else Analytics.ChoiceStatsLF[candit["Choix_1"]]++;
                  break;
              case "Licence appliqu\u00e9e":
                  if (Analytics.ChoiceStatsLA[candit["Choix_1"]] == null) Analytics.ChoiceStatsLA[candit["Choix_1"]] = 1;
                  else Analytics.ChoiceStatsLA[candit["Choix_1"]]++;
                  break;
              case "Ing\u00e9nierie":
                  if (Analytics.ChoiceStatsGENIE[candit["Choix_1"]] == null) Analytics.ChoiceStatsGENIE[candit["Choix_1"]] = 1;
                  else Analytics.ChoiceStatsGENIE[candit["Choix_1"]]++;
                  break;
              case "Mast\u00e8re de recherche":
                  if (Analytics.ChoiceStatsMASRE[candit["Choix_1"]] == null) Analytics.ChoiceStatsMASRE[candit["Choix_1"]] = 1;
                  else Analytics.ChoiceStatsMASRE[candit["Choix_1"]]++;
                  break;
              case "Mast\u00e8re professionnel":
                  if (Analytics.ChoiceStatsMASPRO[candit["Choix_1"]] == null) Analytics.ChoiceStatsMASPRO[candit["Choix_1"]] = 1;
                  else Analytics.ChoiceStatsMASPRO[candit["Choix_1"]]++;
                  break;
              case "Ma\u00eetrise":
                  if (Analytics.ChoiceStatsMET[candit["Choix_1"]] == null) Analytics.ChoiceStatsMET[candit["Choix_1"]] = 1;
                  else Analytics.ChoiceStatsMET[candit["Choix_1"]]++;
                  break;
              default:
                  break;
          }
          if (Analytics.Nbr_Sum_Min_Max_Scores[candit["Nature_diplome_obtenu"]] == null) Analytics.Nbr_Sum_Min_Max_Scores[candit["Nature_diplome_obtenu"]] = [1, score, score, score];
          else {
              let curr = Analytics.Nbr_Sum_Min_Max_Scores[candit["Nature_diplome_obtenu"]]
              let nbr = curr[0];
              nbr++;
              let somme = curr[1] + score;
              let min, max;
              if (curr[2] > score) min = score
              else min = curr[2];

              if (curr[3] < score) max = score
              else max = curr[3];
              Analytics.Nbr_Sum_Min_Max_Scores[candit["Nature_diplome_obtenu"]] = [nbr, somme, min, max]
          }


          // par mastere
          if (Analytics.Nbr_Sum_Min_Max_Scores_Mastere[candit["Choix_1"]] == null) Analytics.Nbr_Sum_Min_Max_Scores_Mastere[candit["Choix_1"]] = [1, score, score, score];
          else {
              let curr = Analytics.Nbr_Sum_Min_Max_Scores_Mastere[candit["Choix_1"]]
              let nbr = curr[0];
              nbr++;
              let somme = curr[1] + score;
              let min, max;
              if (curr[2] > score) min = score
              else min = curr[2];

              if (curr[3] < score) max = score
              else max = curr[3];
              Analytics.Nbr_Sum_Min_Max_Scores_Mastere[candit["Choix_1"]] = [nbr, somme, min, max]
          }
      };
  });


  Analytics.AvgScore = TempSum / ValidUsers;
  console.log("Avg Score : " + Analytics.AvgScore);
  console.log("min Score : " + Analytics.MinScore);
  console.log("max Score : " + Analytics.MaxScore);
  console.log("validUsers = " + Analytics.AllValidUsers);
  console.log(Analytics)


  console.log("Sanity checks...");

  //type diplome 
  let sum2 = 0;
  let DiplomaLabels = Object.keys(Analytics.DiplomaStats);
  DiplomaLabels.forEach(Dip => sum2 += Analytics.DiplomaStats[Dip]);

  console.log("valid deploma's : " + sum2);
  if (sum2 === ValidUsers) {
      console.log("Valid Check  Nature_diplome_obtenu ")
  };



  // choix
  let sum3 = 0;
  let ChoiceLabels = Object.keys(Analytics.ChoiceStats);
  ChoiceLabels.forEach(ch => sum3 += Analytics.ChoiceStats[ch]);
  console.log(sum3);
  console.log("valid Choix : " + sum3);
  if (sum2 === ValidUsers) {
      console.log("Valid Check  Choix")
  };



  /// setting us the Data 
  let diplomaData_all = []

  DiplomaLabels.forEach(Dip => {
      diplomaData_all.push(Analytics.DiplomaStats[Dip]);
  });


  DiplomaLabels.forEach(Dip => {

  });
  console.log(Analytics.DiplomaStatsMRMSRA)

  DiplomaLabels.forEach(Dip => {

  });

  let choixData_all = []
  let choixData_LF = []
  let choixData_LA = []
  let choixData_GENIE = []
  let choixData_MASRE = []
  let choixData_MASPRO = []
  let choixData_MET = []
  ChoiceLabels.forEach(ch => {
      choixData_LF.push(Analytics.ChoiceStatsLF[ch]);
      choixData_LA.push(Analytics.ChoiceStatsLA[ch]);
      choixData_GENIE.push(Analytics.ChoiceStatsGENIE[ch]);
      choixData_MASRE.push(Analytics.ChoiceStatsMASRE[ch]);
      choixData_MASPRO.push(Analytics.ChoiceStatsMASPRO[ch]);
      choixData_MET.push(Analytics.ChoiceStatsMET[ch]);
      choixData_all.push(Analytics.ChoiceStats[ch]);

  });

  let diplomes_nbr = [];
  let diplomes_avg = [];
  let diplomes_min = [];
  let diplomes_max = [];

  /// avg min max // par type de diplome 
  DiplomaLabels.forEach(Dip => {
      let [nbr, somme, min, max] = Analytics.Nbr_Sum_Min_Max_Scores[Dip]
      let avg = somme / nbr;
      diplomes_nbr.push(nbr);
      diplomes_avg.push(avg);
      diplomes_min.push(min);
      diplomes_max.push(max);

  });

  let choix_mastere_nbr = [];
  let choix_mastere_avg = [];
  let choix_mastere_min = [];
  let choix_mastere_max = [];

  ChoiceLabels.forEach(Dip => {
    let [nbr, somme, min, max] = Analytics.Nbr_Sum_Min_Max_Scores_Mastere[Dip]
    let avg = somme / nbr;
    choix_mastere_nbr.push(nbr);
    choix_mastere_avg.push(avg);
    choix_mastere_min.push(min);
    choix_mastere_max.push(max);

});
