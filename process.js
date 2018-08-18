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
      DiplomaStatsMPISI: [],
      DiplomaStatsMRMSRA: [],

      ChoiceStatsLF: [],
      ChoiceStatsLA: [],
      ChoiceStatsGENIE: [],
      ChoiceStatsMASRE: [],
      ChoiceStatsMASPRO: [],
      ChoiceStatsMET: []

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
          if (Analytics.DiplomaStats[candit["Nature_diplome_obtenu"]] == null) {
              Analytics.DiplomaStats[candit["Nature_diplome_obtenu"]] = 1;
          } else {
              Analytics.DiplomaStats[candit["Nature_diplome_obtenu"]]++
          }

          if (candit["Choix_1"] === "MPISI") {
              if (Analytics.DiplomaStatsMPISI[candit["Nature_diplome_obtenu"]] == null) {
                  Analytics.DiplomaStatsMPISI[candit["Nature_diplome_obtenu"]] = 1;
              } else {
                  Analytics.DiplomaStatsMPISI[candit["Nature_diplome_obtenu"]]++
              }
          }

          if (candit["Choix_1"] === "MRMSRA") {
              if (Analytics.DiplomaStatsMRMSRA[candit["Nature_diplome_obtenu"]] == null) {
                  Analytics.DiplomaStatsMRMSRA[candit["Nature_diplome_obtenu"]] = 1;
              } else {
                  Analytics.DiplomaStatsMRMSRA[candit["Nature_diplome_obtenu"]]++
              }
          }


          if (Analytics.ChoiceStats[candit["Choix_1"]] == null) {
              Analytics.ChoiceStats[candit["Choix_1"]] = 1;
          } else {
              Analytics.ChoiceStats[candit["Choix_1"]]++
          }


          if (candit["Nature_diplome_obtenu"] === "Licence fondamentale") {

              if (Analytics.ChoiceStatsLF[candit["Choix_1"]] == null) {
                  Analytics.ChoiceStatsLF[candit["Choix_1"]] = 1;
              } else {
                  Analytics.ChoiceStatsLF[candit["Choix_1"]]++
              }
          }
          if (candit["Nature_diplome_obtenu"] === "Licence appliqu\u00e9e") {


              if (Analytics.ChoiceStatsLA[candit["Choix_1"]] == null) {
                  Analytics.ChoiceStatsLA[candit["Choix_1"]] = 1;
              } else {
                  Analytics.ChoiceStatsLA[candit["Choix_1"]]++
              }
          }
          if (candit["Nature_diplome_obtenu"] === "Ing\u00e9nierie") {

              if (Analytics.ChoiceStatsGENIE[candit["Choix_1"]] == null) {
                  Analytics.ChoiceStatsGENIE[candit["Choix_1"]] = 1;
              } else {
                  Analytics.ChoiceStatsGENIE[candit["Choix_1"]]++
              }
          }
          if (candit["Nature_diplome_obtenu"] === "Mast\u00e8re de recherche") {

              if (Analytics.ChoiceStatsMASRE[candit["Choix_1"]] == null) {
                  Analytics.ChoiceStatsMASRE[candit["Choix_1"]] = 1;
              } else {
                  Analytics.ChoiceStatsMASRE[candit["Choix_1"]]++
              }
          }
          if (candit["Nature_diplome_obtenu"] === "Mast\u00e8re professionnel") {

              if (Analytics.ChoiceStatsMASPRO[candit["Choix_1"]] == null) {
                  Analytics.ChoiceStatsMASPRO[candit["Choix_1"]] = 1;
              } else {
                  Analytics.ChoiceStatsMASPRO[candit["Choix_1"]]++
              }
          }
          if (candit["Nature_diplome_obtenu"] === "Ma\u00eetrise") {
              if (Analytics.ChoiceStatsMET[candit["Choix_1"]] == null) {
                  Analytics.ChoiceStatsMET[candit["Choix_1"]] = 1;
              } else {
                  Analytics.ChoiceStatsMET[candit["Choix_1"]]++
              }
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
  let diplomaDataMPISI = []
  let diplomaDataMRMSRA = []

  DiplomaLabels.forEach(Dip => {
      diplomaData_all.push(Analytics.DiplomaStats[Dip]);
      diplomaDataMPISI.push(Analytics.DiplomaStatsMPISI[Dip]);
      diplomaDataMRMSRA.push(Analytics.DiplomaStatsMRMSRA[Dip]);
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
