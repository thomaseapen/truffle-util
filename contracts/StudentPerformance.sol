pragma solidity ^0.4.0;
contract StudentPerformance {

    string name;
    uint128 totalScore;
    uint128 averageScore;
    string[] subject;
    uint128[] subjectScore;

  function setName(string name1){
     name = name1;
  }
  
  function addSubjectDetails(string subjectName, uint128 score){
      subject.push(subjectName);
      subjectScore.push(score);
      totalScore = totalScore+score;
      averageScore = (uint128)(totalScore/subject.length);
      
  }
  
  function getDetails() constant returns (string, uint128,uint128) {
      return(name,totalScore,averageScore);
  }
  
  function getMarks() constant returns (uint128) {
      return(subjectScore[0]);
  }

}
